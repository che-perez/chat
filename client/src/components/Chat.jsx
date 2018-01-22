import React, { Component } from 'react'

import { subscribeToMessage } from '../api';

import Message from './Message';

/*
for (let i = 0; i < this.state.users.length; i++){
      colors[this.state.users[i]] = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16)
    }
*/

class Chat extends Component {
  constructor(props){
    super()
    this.state = {
      messages: []
    }
    this.assignRandomColor = this.assignRandomColor.bind(this);
  }

  componentDidMount(){
    this.assignRandomColor()
    subscribeToMessage(this.props.activeChannel, (message) => {
      this.setState(prevState => ({
        messages: prevState.messages.concat([message]),
      }));
    });
  }

  assignRandomColor(){
    let colors = {}

    this.setState({
      colors: colors
    })
  }

  render(){
    console.log(this.state.messages)
    return(
      <div className="chat-box">
        <div className="chat">
          {this.state.messages.map(message => {
            return(
              <Message
                key={message.id}
                owner={message.name}
                content={message.message}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Chat
