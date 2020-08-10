'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [{
      title: 'Masak ayam',
      content: 'Cara membuat ayam goreng dengan mudah',
      tags: 'Tutorial',
      status: 'active',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Masak Kambing',
      content: 'Cara membuat kambing goreng dengan mudah',
      tags: 'Tutorial',
      status: 'active',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Masak Ikan',
      content: 'Cara memasak ikan goreng dengan mudah',
      tags: 'Tutorial',
      status: 'active',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
