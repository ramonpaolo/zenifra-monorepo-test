const http = require('http')
const fs = require('fs')

const buildInfo = fs.existsSync('build-info.txt') ? fs.readFileSync('build-info.txt', 'utf8') : 'no build'
const port = Number(process.env.PORT) || 3000

http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)
  res.writeHead(200, { 'content-type': 'text/plain' })
  res.end(`backend:ok (${buildInfo})\n`)
}).listen(port, () => console.log(`backend listening on ${port}`))
