'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.ENUM("active", "deactive"),
      },
      userId: {
        type: Sequelize.INTEGER,
       references :  { model: 'users', key: 'id' },
       onUpdate:'cascade',
       onDelete: 'cascade'
      },
      email: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      postId: {
        type: Sequelize.INTEGER,
       references :  { model: 'posts', key: 'id' },
       onUpdate:'cascade',
       onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comments');
  }
};