// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthorizations = require('../../../app/model/authorizations');
import ExportUser = require('../../../app/model/user');

declare module 'sequelize' {
  interface Sequelize {
    Authorizations: ReturnType<typeof ExportAuthorizations>;
    User: ReturnType<typeof ExportUser>;
  }
}
