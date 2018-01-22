import React from 'react'

import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'
import Logo from './Logo'
import Chat from './Chat'
import MessageBox from './MessageBox'

function Chatting (props) {
  return (
    <div className="row">
      <div className="channel-tray col">
        <Logo />
        <ChannelForm />
        <ChannelList
          selectChannel={props.selectChannel}
        />
      </div>
      <div className="col-10">
        <Chat
          activeChannel={props.activeChannel}
        />
        <MessageBox
          username={props.username}
          activeChannel={props.activeChannel}
        />
      </div>
    </div>
  )
}

export default Chatting
