import React, { Component } from 'react'

import Channel from './Channel'

class ChannelList extends Component {
  render() {
      return (
          <div className="channel-list">
            <Channel name="1" />
            <Channel name="2" />
            <Channel name="3" />
          </div>
      )
  }
}

export default ChannelList
