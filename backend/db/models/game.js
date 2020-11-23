'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  game.init({
    steam_id: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {DataTypes.STRING},
    genre: DataTypes.STRING,
    publisher: DataTypes.STRING,
    release_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};