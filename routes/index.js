let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

// global user array
let chatUsers = []

/* GET home page. */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// handles the messagess
io.on('connection', socket => {
  io.emit('add users to list', chatUsers)
  socket.on('chat is working', msg => {
    console.info('a user is connected')
    console.log('message: ' + msg)
    io.emit('broadcasting chat message', msg)
  })
  socket.on('get users', users => {
    console.log(chatUsers.length)
  })
  socket.on('create a user', user => {
    chatUsers.push(user)
    io.emit('add users to list', chatUsers)
    console.log(chatUsers.length)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

})

http.listen(3001, () => {
  console.log('port 3001')
})

module.exports = app;
