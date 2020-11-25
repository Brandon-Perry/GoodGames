const express = require('express');
const {check} = require('express-validator');
const asyncHandler = require('express-async-handler');

const {handleValidationErrors} = require('../../utils/validation')
const {setToken, requireAuth} = require('../../utils/auth');
const {Op} = require('sequelize')
const {Game} = require('../../db/models')
const {User} = require('../../db/models')

const router = express.Router();

router.get('/:id/wantedGames', asyncHandler(async (req,res) => {
    const {id} = req.params

    const wantedGames = await Game.findAll({
        include: [{
            model: User, 
            as: 'user_games',
            through: {
                where: {
                    wantToPlay: true
                }
            },
            where: {
                id,
            }
        }],
        
    })

    return res.json({wantedGames}) 

}))

module.exports = router