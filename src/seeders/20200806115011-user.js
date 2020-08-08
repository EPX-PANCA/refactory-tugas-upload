'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('users', [{
      username: 'Panca',
      password: 'passwottt',
      salt: 'tes',
      email: 'emailku1@gmail.com',
      photo: 'poto.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'Panca2',
      password: 'passwotttss',
      salt: 'testing',
      email: 'emailku2@gmail.com',
      photo: 'poto.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkDelete('users', null, {});
   
  }
};
