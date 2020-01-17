const { handle500, validateId } = require('../../middleware/apiMW')
const { validateActionReq } = require('../../middleware/apiMW/actionsMW')
const db = require('../../../data/helpers/actionModel')
const router = require('express').Router()

router.get('/', (req, res) =>
  db
    .get()
    .then(actionsArray => res.status(200).json(actionsArray))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.get('/:id', validateId(db), (req, res) =>
  db
    .get(req.params.id)
    .then(action => res.status(200).json(action))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.post('/', validateActionReq, (req, res) =>
  db
    .insert(req.body)
    .then(newAction => res.status(201).json(newAction))
    .catch(err => res.status(500).json({ message: err.message }))
)

router.put('/:id', validateId(db), validateActionReq, (req, res) =>
  db
    .update(req.params.id, { ...req.body })
    .then(updatedAction => res.status(200).json(updatedAction))
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
