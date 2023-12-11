'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Catgories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Order , {foreignKey:'catgoiesId'})
  

      // define association here
    }
  }
  Catgories.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Catgories',
  });
  return Catgories;
};