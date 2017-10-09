import React, {Component} from 'react'

// Desired Features:
// Modal upon refresh
// sessionStorage to remember the user's username

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    createUser = e => {
        e.preventDefault()
        this.props.socket.emit('create a user', this.state.text)
        this.setState({text: ''})
    }

   handleChange = e => {
        this.setState({ text : e.target.value })
    }
    


    render(){
        return (
            <div>
                <form onSubmit={this.createUser} id='pickles'>
                    <input 
                        type="text" 
                        onChange={this.handleChange}
                        value={this.state.text}
                        placeholder="create a username"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login