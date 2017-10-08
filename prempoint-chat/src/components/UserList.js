import React, {Component} from 'react'

class UserList extends Component {
    render() {
        let users = []
        return (
            <div>
                <h4>Online Users</h4>
                <ul>
                    {users
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