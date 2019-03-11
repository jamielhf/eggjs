'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('authorizations', {
      uid: { type: STRING(30), primaryKey: true},
      provider: STRING(30),
      user_id: STRING(30),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('authorizations');
  }
};
