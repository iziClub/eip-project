import router from '@adonisjs/core/services/router'
const ClubsController = () => import('#controllers/clubs_controller')

router.get('/clubs', [ClubsController, 'index']).as('clubs.index')
