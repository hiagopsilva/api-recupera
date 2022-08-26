import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import routes from '@routes/index'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`Server started in port: ${port}`)
})
