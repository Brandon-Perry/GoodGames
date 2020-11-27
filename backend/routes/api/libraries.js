const express = require('express');
const {check} = require('express-validator');
const asyncHandler = require('express-async-handler');

const {handleValidationErrors} = require('../../utils/validation')
const {setToken, requireAuth} = require('../../utils/auth');
const {Op, where} = require('sequelize')
const {Library} = require('../../db/models')
const {User} = require('../../db/models')
const {Game} = require('../../db/models')
const {Library_Game} = require('../../db/models')
const {User_Game} = require('../../db/models');
const user_game = require('../../db/models/user_game');

const router = express.Router();

router.get('/:id/libraries', asyncHandler(async (req,res) => {
    const {id} = req.params

    const allLibraries = await Library.findAll({
        
        where: {
            user_id: id
        }
        
    })

    return res.json({allLibraries}) 

}))

router.get('/:id/library_games/:library_id', asyncHandler(async (req,res) => {
    const {id, library_id} = req.params;

    const library_games = await Library_Game.findAll({
        
        where: {
            library_id: library_id
        }
        
    });

    const user_game_ids = [];
    library_games.forEach((el) => {
        user_game_ids.push(el.game_id)
    })

    const user_games = await User_Game.findAll({
        where: {
            id: {[Op.in]: user_game_ids},
            user_id: id
        }
    })

    const game_ids = [];
    library_games.forEach((el) => {
        game_ids.push(el.game_id)
    })

    const game_info = await Game.findAll({
        where: {
            id: {[Op.in]: game_ids}
        }
    })

    


    return res.json({user_games, game_info})

}))

module.exports = router