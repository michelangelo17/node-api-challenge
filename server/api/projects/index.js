const { handle500 } = require('../../middleware/apiMW')
const { validateNewProject } = require('../../middleware/apiMW/projectsMW')
const db = require('../../../data/helpers/projectModel')
const router = require('express').Router()

router.get('/', (req, res) =>
  db
    .get()
    .then(projectsArray => res.status(200).json(projectsArray))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.get('/:id', (req, res) =>
  db
    .get(req.params.id)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.post('/', validateNewProject, (req, res) =>
  db
    .insert(req.body)
    .then(newProject => res.status(200).json(newProject))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.use(handle500)

module.exports = router
