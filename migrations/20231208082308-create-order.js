'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      selerId: {
        type: Sequelize.INTEGER ,
        allowNull:false , 
        references:{
          model:'Users',
          key:'id'
        }
      },
      currenyId: {
        type: Sequelize.INTEGER ,
        allowNull:false , 
        references:{
          model:'Currencies',
          key:'id'
        }
      },
      catgoiesId: {
        type: Sequelize.INTEGER  ,
        allowNull:false , 
        references:{
          model:'Catgories',
          key:'id'
        }
      },
      count: {
        type: Sequelize.STRING,
        allowNull:false , 
      },
      body: {
        type: Sequelize.JSON,
        allowNull:false , 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE ,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};