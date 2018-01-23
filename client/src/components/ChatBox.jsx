import React from 'react'

import ChatForm from './ChatForm'
import ChatWindow from './ChatWindow'

class ChatBox extends React.Component {
  render(){
    return (
      <div className="chat-box">
        <ChatWindow />
        <form>
          <input></input>
          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default ChatBox
