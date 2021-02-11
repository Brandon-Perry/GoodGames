'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Library_Games', [
      {
        library_id: 1,
        game_id: 1,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 1,
        game_id: 2,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 1,
        game_id: 3,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 1,
        game_id: 4,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 3,
        game_id: 5,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 3,
        game_id: 6,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 3,
        game_id: 7,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 3,
        game_id: 8,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 3,
        game_id: 9,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 2,
        game_id: 10,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 2,
        game_id: 11,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 2,
        game_id: 12,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 2,
        game_id: 13,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        library_id: 2,
        game_id: 14,
        updatedAt: new Date(),
        createdAt: new Date()
      },

      {
        library_id: 2,
        game_id: 8,
        updatedAt: new Date(),
        createdAt: new Date()
      },

      {
        library_id: 2,
        game_id: 4,
        updatedAt: new Date(),
        createdAt: new Date()
      },

      {
        library_id: 2,
        game_id: 3,
        updatedAt: new Date(),
        createdAt: new Date()
      },

    

     ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Library_Games', null, {});
     
  }
};
