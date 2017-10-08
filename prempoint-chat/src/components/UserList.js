import React, {Component} from 'react'

class UserList extends Component {
    render() {
        return (
            <div>
                <h4>Online Users</h4>
                <ul>
                    {this.props.users
                        .map((user, i) => { 
                            return (<li key={i}>{user}</li>)
                        })      
                    }           
                </ul>
            </div> 
        )
    }
}

export default UserList