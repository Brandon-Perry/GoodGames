'use strict';
const fetch = require('node-fetch')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const res = await fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/');

    const resJson = await res.json();

    const apps = resJson.applist.apps 

    for (let i = 0; i < 1000; i++) {
        
      await queryInterface.bulkInsert('Games', [
       {
         name: apps[i].name, steam_id: apps[i].appid, createdAt: new Date(), updatedAt: new Date()
       }], {});
    }
     
    
  },

  down: async (queryInterface, Sequelize) => {
    
     
    await queryInterface.bulkDelete('Games', null, {});
     
  }
};
