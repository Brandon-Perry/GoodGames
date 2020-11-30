'use strict';
const fetch = require('node-fetch')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const res = await fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/');

    const resJson = await res.json();

    const apps = resJson.applist.apps 

    let appObjs = []

    const game_ids = [730, 570, 1085660, 220, 70, 12250, 945360, 1172470, 236850, 219890, 440, 1244950, 4000, 620980]

    for (let i = 0; i < apps.length; i++) {
      if (!game_ids.includes(apps[i].appid)) continue
      let obj = {name: apps[i].name, steam_id: apps[i].appid, createdAt: new Date(), updatedAt: new Date()}
      appObjs.push(obj)
    }

    await queryInterface.bulkInsert('Games', appObjs, {});


    for (let i = 0; i < 20; i++) {
        
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
