const express = require('express')
const router = express.Router()

const product = require('./modules/product')

router.use('/', product)

module.exports = router