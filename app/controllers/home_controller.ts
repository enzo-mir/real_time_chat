import { HttpContext } from '@adonisjs/core/http'
import redis from '@adonisjs/redis/services/main'

export default class HomeController {
  async display(ctx: HttpContext) {
    const render =
      (await redis.get('message')) && JSON.parse((await redis.get('message')) as string)

    return ctx.view.render('pages/home', { render })
  }
}
