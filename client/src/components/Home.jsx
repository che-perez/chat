import React from 'react'

import ChannelList from './ChannelList'
import Logo from './Logo'
import UsernameForm from './UsernameForm'

class Home extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="home">
        <p>Home</p>
        <Logo />
        <UsernameForm
          changeUsername={this.props.changeUsername}
        />
        <ChannelList
          channels={this.props.channels}
          selectChannel={this.props.selectChannel}
        />
      </div>
    )
  }
}

export default Home
