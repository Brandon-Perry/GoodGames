const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");

const {User_Game} = require('../../db/models');

const router = express.Router();


router.put('/:userId/updateGame/:gameId', 

    asyncHandler( async(req,res, next) => {
        
        try {
        const {userId, gameId} = req.params;
        const updatedGame = req.body;
        console.log(updatedGame)
        console.log(req.body)

        const game = await User_Game.findOne({
            where: {
                user_id: userId,
                game_id: gameId
            }
        })
        console.log(game)
        if (game) {
            await game.update({
                played: updatedGame.played,
                playing: updatedGame.playing,
                wantToPlay: updatedGame.wantToPlay
            })
        } 
        // return res.json()
    } catch(e) {
        console.error(e)
        return next(e)
    }
})) 


module.exports = router;