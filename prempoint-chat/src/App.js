import React, { Component } from 'react'
import './App.css'
import io from 'socket.io-client'

//  TODO: 
// Support multiple connections simultaneously
// Allow a user to select a specific user that is online and send a message to them
// If a user receives a message with the text "<sticker>" in it, show some graphic on the screen
// If a user receives a message with the text "</sticker>" in it, remove that graphic from the screen
// Allow users to respond to incoming messages

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      messages: [],
      users: []
    }
  }

// uses the entire url because req to node server
// relative to domain that App is in

// using lifecycle cDM because fetch
  componentDidMount(){
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(users => this.setState({ users })
    )
    this.socket = io('http://localhost:3001') 
    // makes sure that user receives messages upon "logging" in
    this.socket.on('broadcasting chat message', msg => {
      this.setState({messages: [...this.state.messages, msg]})
      console.log(this.state.messages)
    })   
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.text !== '') {
      this.socket.emit('chat is working', this.state.text)

      this.setState({ text: '' })
    }
  }


  render() {
    
    let handleChange = e => {
      this.setState({ text : e.target.value })
      // console.log(e)
    }
    
    return (
      <div className="App">
          <h1 className="App-title">RIP Aim</h1>
          {this.state.users
            .map(user => <div key={user.id}>{user.username}</div>
          )}
          <ul id="messages">
            {this.state.messages
              .map((message, i) => {
                return <li key={i} id="messages">{message}</li>
              })
            }
          </ul>
          <form onSubmit={this.handleSubmit} action="">
            <input id="m" autoComplete="off" onChange={handleChange} /> <button onSubmit={this.handleSubmit}>Send</button>
          </form>
      </div>
    )
  }
}

export default App;
