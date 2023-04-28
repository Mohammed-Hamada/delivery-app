'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const deliveryTable = await queryInterface.createTable('deliveries', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      pickupAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pickupLatitude: {
        type: Sequelize.DECIMAL(10, 8),
        allowNull: false,
      },
      pickupLongitude: {
        type: Sequelize.DECIMAL(11, 8),
        allowNull: false,
      },
      dropoffAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dropoffLatitude: {
        type: Sequelize.DECIMAL(10, 8),
        allowNull: false,
      },
      dropoffLongitude: {
        type: Sequelize.DECIMAL(11, 8),
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });

    return deliveryTable;
  },

  async down(queryInterface) {
    return await queryInterface.dropTable('deliveries');
  },
};
