'use strict';
const fetch = require('node-fetch')
const {Game} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('User_Games', [
      {
        user_id: 1,
        game_id: 1,
        played: true,
        playing: false,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 2,
        played: true,
        playing: false,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 3,
        played: true,
        playing: false,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 4,
        played: true,
        playing: false,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 5,
        played: false,
        playing: true,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 6,
        played: false,
        playing: true,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 7,
        played: false,
        playing: true,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 8,
        played: false,
        playing: true,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 9,
        played: false,
        playing: true,
        wantToPlay: false,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 10,
        played: false,
        playing: false,
        wantToPlay: true,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 11,
        played: false,
        playing: false,
        wantToPlay: true,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 12,
        played: false,
        playing: false,
        wantToPlay: true,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 13,
        played: false,
        playing: false,
        wantToPlay: true,

        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        user_id: 1,
        game_id: 14,
        played: false,
        playing: false,
        wantToPlay: true,

        updatedAt: new Date(),
        createdAt: new Date()
      },
     ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     
     await queryInterface.bulkDelete('User_Games', null, {});
     
  }
};
