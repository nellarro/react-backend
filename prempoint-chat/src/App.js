import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client'

class App extends Component {
  state = {users: []}

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
    return (
      <div className="App">
          <h1 className="App-title">users</h1>
          {this.state.users
            .map(user => <div key={user.id}>{user.username}</div>
          )}
          <ul id="messages"></ul>
          <form action="">
            <input id="m" autoComplete="off" /> <button>Send</button>
          </form>
      </div>
    );
  }
}

export default App;
