// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import transmit from '@adonisjs/transmit/services/main'
import redis from '@adonisjs/redis/services/main'
export default class ChatsController {
  async store({ request, response }: HttpContext) {
    const { message, username } = request.only(['message', 'username'])

    if (!message) return response.redirect().back()
    const renderMessage = `${Date.now().toLocaleString()} ${username || 'Guest'} : ${message}`
    let messages = JSON.parse((await redis.get('message')) as string)

    !messages ? (messages = [renderMessage]) : messages.push(renderMessage)

    await redis.set('message', JSON.stringify(messages))

    transmit.broadcast('chat/1', {
      message: renderMessage,
    })
    return response.redirect().back()
  }
}
