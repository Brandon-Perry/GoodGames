'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {


      User_Game.hasMany(models.Library_Game, {foreignKey: 'game_id'});

      const columnMapping = {
        through: 'Library_Game',
        otherKey: 'library_id',
        foreignKey: 'game_id'
      }

      User_Game.belongsToMany(models.Library, columnMapping)


    }
  };
  User_Game.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    played: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    playing: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    wantToPlay: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    review: {
      type: DataTypes.TEXT,
    }
  }, {
    sequelize,
    modelName: 'User_Game',
  });
  return User_Game;
};