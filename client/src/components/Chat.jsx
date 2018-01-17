import React from 'react'

import Message from './Message'

function Chat (props){
  return(
    <div className="chat">
      <Message owner="Mofongo" content="Hi." />
    </div>
  )
}

export default Chat
