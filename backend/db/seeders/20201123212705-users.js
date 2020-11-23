'use strict';
import SteamUserIds from '../../user_ids';
const fetch = require('node-fetch');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    for (let i = 0; i < SteamUserIds.length; i++) {
      
    }
    
    await queryInterface.bulkInsert('Users', [
      {
      

      
     }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
