import React, { Component } from 'react'
import './App.css'
import io from 'socket.io-client'
import UserList from './components/UserList'
import Login from './components/LogIn'
import Messages from './components/Message'

//  TODO: 
// Support multiple connections simultaneously [[complete--using your ipaddress]]
// Allow a user to select a specific user that is online and send a message to them [[::smile]]
// If a user receives a message with the text "<sticker>" in it, show some graphic on the screen [[complete]]
// If a user receives a message with the text "</sticker>" in it, remove that graphic from the screen [[complete]]
// Allow users to respond to incoming messages [[complete]]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      messages: [],
      showScreen: true
    }
  }

// uses the entire url because req to node server
// relative to domain that App is in

  componentWillMount(){
    // for a second user, replace with ip address to initiate communication
    this.socket = io('http://localhost:3001') 
    this.socket.emit('get users', this.state.users)
 
    this.socket.on('broadcasting chat message', msg => {
      this.setState({messages: [...this.state.messages, msg]})
      console.warn(this.state.messages)
    })   
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.text !== '') {
      this.socket.emit('chat is working', this.state.text)

      this.setState({ text: ''})
    }
  }

  clearScreen = () => {
    this.setState({showScreen: !this.state.showScreen})
  }


  render() {
    
    let handleChange = e => {
      this.setState({ text : e.target.value })
      // console.log(e)
    }

      if(this.state.showScreen === true) {
        return (
          <div className="App">
            <Login socket={this.socket} />
            <UserList socket={this.socket} clearScreen={this.clearScreen}/>
            <Messages messages={this.state.messages}/>
            <form onSubmit={this.handleSubmit} action="">
              <input 
                id="m" 
                autoComplete="off" 
                placeholder="type your message here"
                onChange={handleChange} 
                value={this.state.text} /><button>Send</button>
            </form>
          </div>
        )
      } else {
        return <Messages />
      }
    } 
}

export default App;
