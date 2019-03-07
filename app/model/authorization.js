'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('authorization', {
    uid: { type: STRING(30), primaryKey: true},
    user_id: STRING(30),
    provider: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};