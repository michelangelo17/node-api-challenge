const { handle500 } = require('../../middleware')
const db = require('../../../data/helpers/projectModel')
const router = require('express').Router()

router.use(handle500)

module.exports = router
