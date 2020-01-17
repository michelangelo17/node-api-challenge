const { handle500 } = require('../../middleware')
const db = require('../../../data/helpers/projectModel')
const router = require('express').Router()

router.get('/', (req, res) =>
  db
    .get()
    .then(projectsArray => res.status(200).json(projectsArray))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.use(handle500)

module.exports = router
