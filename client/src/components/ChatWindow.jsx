import React from 'react'

import Message from './Message'

class ChatWindow extends React.Component {

  scrollToBottom(){
    this.messagesEnd.scrollIntoView({})
  }

  componentDidMount(){
    this.scrollToBottom()
  }

  componentDidUpdate(){
    this.scrollToBottom()
  }

  render(){
    return (
      <div className="chat-window">
        {this.props.messages.sort((a,b) => {
            if (a.timestamp < b.timestamp)
              return -1
            if (a.timestamp > b.timestamp)
              return 1
            return 0
          })
        .map((message) => {
          return (
            <Message
              key={message.id}
              id={message.id}
              name={message.name}
              message={message.message}
              date={message.timestamp}
            />
        )})
        }
        <div id="end-of-chat" ref={(el) => {this.messagesEnd = el}}></div>
      </div>
    )
  }
}

export default ChatWindow
