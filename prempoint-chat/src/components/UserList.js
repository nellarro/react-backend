import React, {Component} from 'react'

class UserList extends Component {
    constructor(props){
        super(props)
        this.state = {
            chatUsers: []
        }
    }

    componentDidMount(){
        this.props.socket.on('add users to list', chatUsers => {
            console.log('yay! chatusers are: ' + chatUsers)
            this.setState({ chatUsers })
        })      
    }

    render() {
        return (
            <div>
                <h4>Online Users</h4>
                <ul>
                    {this.state.chatUsers
                        .map((user, i) => { 
                            return (
                                <li key={i}>
                                    <a href="#" onClick={this.props.clearScreen}>{user}</a>
                                </li>
                            )
                        })      
                    }           
                </ul>
            </div> 
        )
    }
}

export default UserList