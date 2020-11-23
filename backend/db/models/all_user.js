'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class All_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  All_User.init({
    user_name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'All_User',
  });
  return All_User;
};