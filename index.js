require('dotenv').config()
const server = require('./server')

const port = process.env.PORT || 8889

server.listen(port, () =>
  console.log(`\n*** Running along on http://localhost:${port} ***\n`)
)
