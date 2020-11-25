'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Libraries', [
      {
        name: 'Favorites',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Need better computer first',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'omg too good',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('Libraries', null, {});
     
  }
};
