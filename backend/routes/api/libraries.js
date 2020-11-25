const express = require('express');
const {check} = require('express-validator');
const asyncHandler = require('express-async-handler');

const {handleValidationErrors} = require('../../utils/validation')
const {setToken, requireAuth} = require('../../utils/auth');
const {Op} = require('sequelize')
const {Library} = require('../../db/models')
const {User} = require('../../db/models')

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

module.exports = router