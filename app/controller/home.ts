import { Controller } from 'egg';
import {content} from '../web/app';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = `<html>
              <head>
                <title>ssr</title>
              </head>
              <body>
                <div id="root">${content}</div>
              </body>
            </html>`;
  }
}
