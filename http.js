const http = require('http')
const port = 3003
// const json = {aa: 123}
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('123')
})

server.listen(port, () => {
    console.log(`服务器运行在 ${port}/`)
})