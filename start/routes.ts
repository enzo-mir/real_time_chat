/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const HomeController = () => import('#controllers/home_controller')
const ChatsController = () => import('#controllers/chats_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'display'])
router.post('/message', [ChatsController, 'store'])
