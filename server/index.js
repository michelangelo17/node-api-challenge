const server = require('express')()
const { middleware } = require('./middleware')
const apiRouter = require('./api')

server.use('/api', middleware, apiRouter)

module.exports = server
