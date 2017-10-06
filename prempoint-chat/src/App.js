import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      users: []
    }
  }

// uses the entire url because req to node server
// relative to domain that App is in

// using lifecycle cDM because fetch
  componentDidMount(){
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }


  render() {
    let socket = io('http://localhost:3001');

    let handleSubmit = e => {
      e.preventDefault()
      if (this.state.text !== '') {
        let message = {
          type : 'message',
          text : this.state.text,
          time : 0, // Set by the server
          user : 0, // Set before sending
        } 
        this.setState({ text: '' });
      }
    }

    let handleChange = e => {
      this.setState({ text : e.target.value });
    }
    
    return (
      <div className="App">
          <h1 className="App-title">users</h1>
          {this.state.users
            .map(user => <div key={user.id}>{user.username}</div>
          )}
          <ul id="messages"></ul>
          <form onSubmit={handleSubmit} action="">
            <input id="m" autoComplete="off" onChange={handleChange} /> <button onSubmit={handleSubmit}>Send</button>
          </form>
      </div>
    );
  }
}

export default App;
