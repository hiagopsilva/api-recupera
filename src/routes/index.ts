import { Router } from 'express'

import UserController from '@controllers/UsersController'

const routes = Router()

routes.get('/auth', UserController.auth)
routes.get('/debtors/list', UserController.debtors)
routes.get('/debts/list', UserController.debts)
routes.get('/agreements/list', UserController.agreement)

export default routes