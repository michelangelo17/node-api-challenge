const { handle500 } = require('../../middleware')
const router = require('express').Router()


router.use(handle500)

module.exports = router
