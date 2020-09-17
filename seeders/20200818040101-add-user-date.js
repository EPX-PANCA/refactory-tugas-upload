'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [{
      full_name: "panca123",
      username: "panca123",
      password: "$2b$10$0Axr2uS6Ljb8OeBSuoHPK.X9DAU/rGww1pRfUewMRPACMkaO7O/5S",
      salt: "$2b$10$0Axr2uS6Ljb8OeBSuoHPK.",
      email: "rectapanca@gmail.com",
      phone_number: "082178633846",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: "Sam Doe",
      username: "samdoe",
      password: "passsam",
      salt: "",
      email: "samdoe@gmail.com",
      phone_number: "087879489",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: "Jhonny Doe",
      username: "jhonnydoe",
      password: "passjohnny",
      salt: "",
      email: "jhonnydoe@gmail.com",
      phone_number: "087879441",
      role: "admin",
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
    return queryInterface.bulkDelete("Users", null, {})
  }
};
