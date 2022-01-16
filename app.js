const express = require("express")
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const app = express()
const PORT = process.env.PORT

app.get("/", (req, res) => {
  return res.send(`<h1>Hello World</h1>`)
})

app.listen(PORT, () => {
  console.log(`E-Commerce is running on port: ${PORT} `)
})
