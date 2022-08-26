import api from '../services'

class UsersController {
  async auth (request, response) {
    const dataAuth = await api.post('/auth', {
      user: request.body.user,
      pass: request.body.password
    })

    return response.json({ data: dataAuth.data.token })
  }

  async debtors (request, response) {
    const config = {
      headers: {
        Authorization: `Bearer ${request.headers.token}`
      }
    }

    const { data } = await api.get('/debtors/list', config)

    return response.json(data)
  }

  async debts (request, response) {
    const config = {
      headers: {
        Authorization: `Bearer ${request.headers.token}`
      }
    }

    const { data } = await api.get('/debts/list', config)

    return response.json(data)
  }

  async agreement (request, response) {
    const config = {
      headers: {
        Authorization: `Bearer ${request.headers.token}`
      }
    }

    const { data } = await api.get('/agreements/list', config)

    return response.json(data)
  }
}

export default new UsersController()
