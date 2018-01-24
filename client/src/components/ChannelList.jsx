import React from 'react'

import Channel from './Channel'

class ChannelList extends React.Component {
  render(){
    return (
      <div className="channel-list">
        {this.props.channels.sort((a,b) => {
          if (a.name < b.name)
            return -1
          if (a.name > b.name)
            return 1
          return 0
          })
        .map((channel) => {
          return (
            <Channel
              key={channel.id}
              id={channel.id}
              name={channel.name}
              selectChannel={this.props.selectChannel}
            />
        )})}
      </div>
    )
  }
}

export default ChannelList
