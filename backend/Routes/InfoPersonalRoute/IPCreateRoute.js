const Express = require('express')
const router = Express.Router()

const IPCreateController = require('../../Controllers/InfoPersonalController/IPCreateController')

router.post('/Create', IPCreateController)

module.exports = router