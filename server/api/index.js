const { handle500 } = require('../middleware')
const router = require('express').Router()
const actionsRouter = require('./actions')
const projectsRouter = require('./projects')

module.exports = [
  router.use('/actions', actionsRouter),
  router.use('/projects', projectsRouter),
]

const allPaths = [
  '/',
  '/:misc',
  '/:misc/:misc',
  '/:misc/:misc/:misc',
  '/:misc/:misc/:misc/:misc',
  '/:misc/:misc/:misc/:misc/:misc',
  '/misc/:misc/:misc/:misc/:misc/:misc',
]

router.use(
  allPaths,
  () => {
    throw new Error(
      `Make sure you're using a valid path: /api/users OR /api/posts`
    )
  },
  handle500
)
