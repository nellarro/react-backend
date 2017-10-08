let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

/* GET home page. */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// handles the messages
io.on('connection', socket => {
  socket.on('chat is working', msg => {
    console.info('a user is connected')
    console.log('message: ' + msg)
    io.emit('broadcasting chat message', msg)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(3001, () => {
  console.log('port 3001')
})

module.exports = app;
