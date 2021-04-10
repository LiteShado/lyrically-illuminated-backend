'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tagging extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tagging.init({
    tagId: DataTypes.INTEGER,
    moodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tagging',
  });
  return tagging;
};