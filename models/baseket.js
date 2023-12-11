'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Baseket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User , {foreignKey:'orderId'})
      this.hasMany(models.Order , {foreignKey:'userId'})
      // define association here
    }
  }
  Baseket.init({
    orderId: DataTypes.INTEGER,
    uesrId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Baseket',
  });
  return Baseket;
};