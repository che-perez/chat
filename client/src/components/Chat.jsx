import React, { Component } from 'react'

import Message from './Message';

class Chat extends Component {
  constructor(props){
    super()
  }

  render(){
    return(
      <div className="chat-box">
        <div className="chat">
          {this.props.messages.sort((a,b) => {
            if (a.timestamp < b.timestamp)
              return -1;
            if (a.timestamp > b.timestamp)
              return 1;
            return 0;
          }).map(message => {
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
