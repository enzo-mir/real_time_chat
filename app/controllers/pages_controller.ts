import { HttpContext } from '@adonisjs/core/http'
import redis from '@adonisjs/redis/services/main'

export default class PagesController {
  async home(ctx: HttpContext) {
    const channels = JSON.parse((await redis.get('channels'))!)

    return ctx.view.render('pages/home', { channels })
  }
  async chat(ctx: HttpContext) {
    const { id } = ctx.params
    const render =
      (await redis.get(`message_${id}`)) && JSON.parse((await redis.get(`message_${id}`)) as string)

    return ctx.view.render('pages/chat', { render })
  }
}
