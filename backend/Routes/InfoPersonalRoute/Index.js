const Express = require('express')
const router = Express.Router()

const IPCreateRoute = require('./IPCreateRoute')

router.use('/InfoPersonal', IPCreateRoute)

module.exports = router