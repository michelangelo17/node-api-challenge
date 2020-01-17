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

const handle500 = (err, req, res, next) =>
  res.status(500).json({
    message: '500: Internal Server Error',
    location: req.originalUrl,
    error: err.message,
  })

const middleware = [helmet, logger, json, cors]

module.exports = { middleware, handle500 }
