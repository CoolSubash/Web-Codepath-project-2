import express from 'express'
import cors from 'cors'
import businessRouter from './routes/business.js'

const app = express()

app.use(cors())
app.use('/', businessRouter)

app.listen(process.env.PGPORT, () => {
  console.log('I am listening to Server')
})
