'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Catgories , {foreignKey:'catgoiesId'})
      this.belongsTo(models.User , {foreignKey:'selerId'})
      this.belongsTo(models.Currency , {foreignKey:'currenyId'})
      // define association here
    }
  }
  Order.init({
    selerId: DataTypes.INTEGER,
    currenyId: DataTypes.INTEGER,
    catgoiesId: DataTypes.INTEGER,
    count: DataTypes.STRING,
    body: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};