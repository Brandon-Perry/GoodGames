'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      const columnMapping = {
        through: 'Library_Game',
        as: 'library_game',
        otherKey: 'game_id',
        foreignKey: 'library_id'
      }

      Library.belongsTo(models.User, {foreignKey: 'user_id'})
      Library.belongsToMany(models.User_Game, columnMapping)
    }
  };
  Library.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Library',
  });
  return Library;
};