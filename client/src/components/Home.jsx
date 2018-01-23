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
        <Logo />
        <UsernameForm
          changeUsername={this.props.changeUsername}
        />
        <ChannelList />
      </div>
    )
  }
}

export default Home
