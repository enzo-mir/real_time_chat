/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const PagesdController = () => import('#controllers/pages_controller')
const ChatsController = () => import('#controllers/chats_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [PagesdController, 'home'])
router.get('/chat/:id', [PagesdController, 'chat'])
router.post('/message/:id', [ChatsController, 'store'])
