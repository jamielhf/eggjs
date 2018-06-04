import { Controller } from 'egg';

export default class LoginController extends Controller {
    public async index() {
      const { ctx } = this;
      ctx.body = 'login';
    }
}
