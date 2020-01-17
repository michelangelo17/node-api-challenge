const server = require('express')()
const { middleware } = require('./middleware/apiMW')
const apiRouter = require('./api')

server.use('/api', middleware, apiRouter)

module.exports = server
