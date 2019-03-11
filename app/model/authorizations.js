/* eslint-disable valid-jsdoc */
'use strict';

module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const Authorizations = app.model.define('authorizations', {
    uid: { type: STRING(30), primaryKey: true },
    user_id: STRING(30),
    provider: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  });

  /**
   * 根据 uid查找
   * @param {string} uid
   * @returns
   */
  Authorizations.findUserByAuthUid = async function(uid) {
    return await this.findOne({
      where: {
        uid,
      },
    });
  };

  return Authorizations;
};
