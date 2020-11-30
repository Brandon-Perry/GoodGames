'use strict';
// const SteamUserIds = require('../../user_ids');
const fetch = require('node-fetch');
const key = require('../../../api_key');
const faker = require('faker');
const bycrypt = require('bcryptjs')


module.exports = {
  up: async (queryInterface, Sequelize) => {

    // let db_Inputs = []

    // for (let i = 0; i < SteamUserIds.length; i++) {
    //   let id = SteamUserIds[i]
    //   const userDataRes = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&format=json&steamids=${id}`)
    //   const userDataJson = await userDataRes.json()
    //   let userData = userDataJson.response.players[0]
    //   let entry = {
    //     username:userData.personaname, 
    //     email: faker.internet.email(),
    //     hashedPassword: bycrypt.hashSync('password'),
    //     steam_id: userData.steamid,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    //   db_Inputs.push(entry)
    // }
    
    
    // await queryInterface.bulkInsert('Users', db_Inputs, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Users', null, {});
    
  }
};
