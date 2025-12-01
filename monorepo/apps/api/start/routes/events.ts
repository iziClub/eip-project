import router from '@adonisjs/core/services/router'

const EventsController = () => import('#controllers/events_controller')

router.get('/events', [EventsController, 'index']).as('events.index')
router.get('/clubs/:slug/events', [EventsController, 'byClub']).as('clubs.events.index')
