import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend.quant.dev.br',
  timeout: 15000
})

export default api
