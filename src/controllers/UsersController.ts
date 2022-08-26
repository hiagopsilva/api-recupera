import api from '../services'

class UsersController {
  async auth (request, response) {
    try {
      const dataAuth = await api.post('/auth', {
        user: request.body.user,
        pass: request.body.password
      })

      return response.json({ data: dataAuth.data.token })
    } catch (error) {
      console.log(error)
    }
  }

  async debtors (request, response) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${request.headers.token}`
        }
      }

      const { data } = await api.get('/debtors/list', config)

      return response.json(data)
    } catch (error) {
      console.log(error)
    }
  }

  async debts (request, response) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${request.headers.token}`
        }
      }

      const { data } = await api.get('/debts/list', config)

      return response.json(data)
    } catch (error) {
      console.log(error)
    }
  }

  async agreement (request, response) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${request.headers.token}`
        }
      }

      const { data } = await api.get('/agreements/list', config)

      return response.json(data)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UsersController()
