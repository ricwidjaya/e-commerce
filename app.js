const express = require("express")
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const routers = require('./routes')
const handlebars = require('express-handlebars')
const session = require('express-session')

const app = express()
const PORT = process.env.PORT

// View engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.static('public'))

// http & sessions

app.use(routers)

app.listen(PORT, () => {
  console.log(`E-Commerce is running on port: ${PORT} `)
})