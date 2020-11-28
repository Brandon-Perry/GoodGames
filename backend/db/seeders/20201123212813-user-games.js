'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('User_Games', [
      {
        user_id: 1,
        game_id: 5,
        played: true,
        playing: true,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 10,
        played: true,
        playing: false,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 20,
        played: false,
        playing: false,
        wantToPlay: true,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 15,
        played: true,
        playing: true,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 17,
        played: false,
        playing: true,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
     ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     
     await queryInterface.bulkDelete('User_Games', null, {});
     
  }
};
