const { handle500, validateId } = require('../../middleware/apiMW')
const { validateProjectReq } = require('../../middleware/apiMW/projectsMW')
const db = require('../../../data/helpers/projectModel')
const router = require('express').Router()

router.get('/', (req, res) =>
  db
    .get()
    .then(projectsArray => res.status(200).json(projectsArray))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.get('/:id', validateId(db), (req, res) =>
  db
    .get(req.params.id)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.get('/:id/actions', validateId(db), (req, res) =>
  db
    .getProjectActions(req.params.id)
    .then(actionsArray => res.status(200).json(actionsArray))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.post('/', validateProjectReq, (req, res) =>
  db
    .insert(req.body)
    .then(newProject => res.status(201).json(newProject))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.put('/:id', validateId(db), validateProjectReq, (req, res) =>
  db
    .update(req.params.id, { ...req.body })
    .then(updatedProject => res.status(200).json(updatedProject))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.delete('/:id', validateId(db), (req, res) =>
  db
    .remove(req.params.id)
    .then(numDeleted => res.status(200).end())
    .catch(err => res.status(500).json({ message: err.message }))
)

router.use(handle500)

module.exports = router
