'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Library_Games', [
      {
        library_id: 1,
        game_id: 5,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 1,
        game_id: 10,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 2,
        game_id: 20,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 2,
        game_id: 17,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 3,
        game_id: 20,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 3,
        game_id: 5,
        updatedAt: new Date(),
        createdAt: new Date()
      },

     ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Library_Games', null, {});
     
  }
};