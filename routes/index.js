let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

let port = 3001

/* GET home page. */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
  console.log('a user is connected')
})

http.listen(3001, () => {
  console.log('port 3001')
})

server.listen(port, err => {  
  err 
    ? console.log('error:', err) 
    : open(`http://localhost:${port}`)
   }
);

module.exports = app;
