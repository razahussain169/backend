import app from './app.js'

import dotenv from 'dotenv'
import route from './routes/routes.js'
import connetcDb from './database/db.js'

dotenv.config({path:'./config/sample.env'})
connetcDb()
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })