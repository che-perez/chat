import React from 'react'

import Message from './Message'

function Chat (props){
  return(
    <div className="chat">
      <div className="logo-container">
        <p id="chat-logo">Chattish</p>
      </div>
      <Message owner="Mofongo" content="Hi." />
      <Message owner="peter" content="sup!" />
      <Message owner="Mofongo" content="not much" />
    </div>
  )
}

export default Chat
