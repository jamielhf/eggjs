'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    uid: { type: STRING(30), primaryKey: true},
    name: STRING(30),
    photo: STRING(252),
    type: STRING(30),
    email: STRING(50),
    password: STRING(50),
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};