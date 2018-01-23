import React from 'react'

import Message from './Message'

class ChatWindow extends React.Component {
  render(){
    return (
      <div className="chat-window">
        <Message />
      </div>
    )
  }
}

export default ChatWindow
