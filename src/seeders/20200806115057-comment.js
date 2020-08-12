'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [{
      content: 'mantab',
      status: 'active',
      userId: 1,
      email: 'santuy@gmail.com',
      url: 'www.blog.com/masak-ayam',
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      content: 'nice',
      status: 'active',
      userId: 2,
      email: 'santuy32@gmail.com',
      url: 'www.blog.com/masak-kambing',
      postId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: 'mantab mas',
      status: 'active',
      userId: 2,
      email: 'kuy@gmail.com',
      url: 'www.blog.com/masak-ikan',
      postId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});
  }
};
