import React from 'react'

import ChannelTray from './ChannelTray'
import ChatBox from './ChatBox'

class Chat extends React.Component {
  render(){
    return (
      <div className="chat">
        <ChannelTray />
        <ChatBox />
      </div>
    )
  }
}

export default Chat
