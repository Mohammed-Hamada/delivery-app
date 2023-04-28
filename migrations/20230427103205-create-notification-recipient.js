'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const notificationRecipientsTable = await queryInterface.createTable(
      'notification_recipients',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          unique: true,
          primaryKey: true,
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
        notificationId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'notifications',
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
      },
    );

    return notificationRecipientsTable;
  },

  async down(queryInterface) {
    return await queryInterface.dropTable('notification_recipients');
  },
};
