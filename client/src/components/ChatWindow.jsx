import React from 'react'

import Message from './Message'

class ChatWindow extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="chat-window">
        {this.props.messages.sort((a,b) => {
            if (a.timestamp < b.timestamp)
              return -1;
            if (a.timestamp > b.timestamp)
              return 1;
            return 0;
          })
        .map((message) => {
          return (
            <Message
              key={message.id}
              id={message.id}
              name={message.name}
              message={message.message}
            />
        )})
        }
      </div>
    )
  }
}

export default ChatWindow
