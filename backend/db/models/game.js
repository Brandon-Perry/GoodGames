'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const columnMappingUsers = {
        through: 'User_Game',
        otherKey: 'user_id',
        foreignKey: 'game_id'
      }

      const columnMappingReviews = {
        through: 'Review',
        otherKey: 'user_id',
        foreignKey: 'game_id'
      }

      Game.belongsToMany(models.User, columnMappingUsers);
      Game.belongsToMany(models.User, columnMappingReviews)
    }
  };
  Game.init({
    steam_id: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(255),
    },
    genre: {
      type: DataTypes.STRING(50),
    },
    publisher: {
      type: DataTypes.STRING(50),
    },
    release_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};