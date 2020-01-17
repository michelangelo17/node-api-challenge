const json = require('express').json()
const cors = require('cors')()
const helmet = require('helmet')()

const logger = (req, res, next) => {
  console.log(
    `\n*** Server Request Information ***\n 
    Request Method: ${req.method}\n 
    Request URL: ${req.originalUrl}\n
    TimeStamp: ${new Date(Number(new Date()))}`
  )
  next()
}

//TODO: add check for path, if normal valid, direct user to documentation
const handle500 = (err, req, res, next) =>
  res.status(500).json({
    message: '500: Internal Server Error',
    location: req.originalUrl,
    error: err.message,
  })

const validateId = db => (req, res, next) =>
  db
    .get(req.params.id)
    .then(obj =>
      obj !== null ? next() : res.status(400).json({ message: 'invalid id' })
    )

const middleware = [helmet, logger, json, cors]

module.exports = { middleware, handle500, validateId }
