const { handle500 } = require('../../middleware/apiMW')
const db = require('../../../data/helpers/projectModel')
const router = require('express').Router()

router.use(handle500)

module.exports = router
