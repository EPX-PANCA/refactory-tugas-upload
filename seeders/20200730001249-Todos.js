'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Todos', [{
        kegiatan: 'Tidur Siang',
        cek:'',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        kegiatan: 'Latihan',
        cek:'',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        kegiatan: 'Belajar Coding',
        cek:'',
        createdAt: new Date(),
        updatedAt: new Date()
      }])


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
