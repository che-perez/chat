import React, { Component } from 'react'

import { subscribeToMessage } from '../api';

import Message from './Message';
import MessageBox from './MessageBox';

class Chat extends Component {
  constructor(props){
    super()
    this.state = {
      messages: [],
      users: ["Mofongo", "peter", "thompson"],
      colors: {}
    }
    this.assignRandomColor = this.assignRandomColor.bind(this);

    subscribeToMessage((message) => {
      this.setState(prevState => ({
        messages: prevState.messages.concat([message]),
      }));
    });
  }

  componentDidMount(){
    this.assignRandomColor()
  }

  assignRandomColor(){
    let colors = {}
    for (let i = 0; i < this.state.users.length; i++){
      colors[this.state.users[i]] = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16)
    }
    this.setState({
      colors: colors
    })
  }

  render(){
    return(
      <div className="chat-box">
      <div className="chat">
        <div className="logo-container">
          <p id="chat-logo">Chattish</p>
        </div>
        {this.state.messages.map(message => {
          return(
            <Message
              key={message.id}
              owner={message.user}
              content={message.content}
              color={this.state.colors[message.user]}
            />
          )
        })}
      </div>
      <MessageBox channelId={this.props.channelId}/>
      </div>
    )
  }
}

export default Chat
