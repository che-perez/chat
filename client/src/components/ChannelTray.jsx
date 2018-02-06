import React from 'react'

import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'

class ChannelTray extends React.Component {
  render(){
    return (
      <div className="channel-tray">
        <a href="/" className="logo-chatroom">Chattish</a>
        <ChannelForm
          channels={this.props.channels}
        />
        <ChannelList
          channels={this.props.channels}
          selectChannel={this.props.selectChannel}
        />
      </div>
    )
  }
}

export default ChannelTray
