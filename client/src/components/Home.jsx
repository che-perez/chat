import React from 'react'

import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'
import Logo from './Logo'
import UsernameForm from './UsernameForm'

class Home extends React.Component {
  render(){
    return (
      <div className="home">
        
        <Logo />
        <UsernameForm
          changeUsername={this.props.changeUsername}
        />
        <p>Create a new app...</p>
        <ChannelForm
          channels={this.props.channels}
        />
        <p>Or select an existing channel.</p>
        <ChannelList
          channels={this.props.channels}
          selectChannel={this.props.selectChannel}
        />
      </div>
    )
  }
}

export default Home
