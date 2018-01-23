import React from 'react'

import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'
import Logo from './Logo'

class ChannelTray extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="channel-tray">
        <Logo />
        <ChannelForm />
        <ChannelList
          channels={this.props.channels}
          selectChannel={this.props.selectChannel}
        />
      </div>
    )
  }
}

export default ChannelTray
