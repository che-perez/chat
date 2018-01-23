import React from 'react'

import Logo from './Logo'

class ChannelTray extends React.Component {
  render(){
    return (
      <div className="channel-tray">
        <Logo />
        <form>
          <input></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default ChannelTray
