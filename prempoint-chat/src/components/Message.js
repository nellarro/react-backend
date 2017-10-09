import React, {Component} from 'react'
// import config from '../config.js' <--- eventual API

class Messages extends Component {
  constructor(props){
    super(props)
    this.state = {
        messages: [],
        image: ''
    }
}
componentWillReceiveProps(nextProps){
  nextProps.messages.forEach((message, i)=> {
    if(message.includes('<sticker')){
      this.setState({image: "https://media2.giphy.com/media/3ov9k7FD67r4lE39U4/giphy.gif"})
    } else if (message.includes('</sticker>')){
      this.setState({image: ''})
    }
  })
}

// WOULD HAVE USED API 
// componentDidMount(){
//   let url = `http://api.giphy.com/v1/stickers/random?q=broad+city&api_key=${API_KEY.API_KEY}`  
//   fetch(url)
//     .then((resp) => resp.json())
//     .then(data => {
//       console.log(url)
//     })
  
// }

    render() {
        return(
          <div class="chat">
            <ul id="messages">
            {this.props.messages
              .map((message, i) => {
                return <li key={i} id="messages">{message}</li>
              })
            }
          </ul>
          <img src={this.state.image} />
          </div>
            
        )
    }
}

export default Messages