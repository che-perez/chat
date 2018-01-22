import React, { Component } from 'react'

import { subscribeToChannels } from '../api'

import Channel from './Channel';

class ChannelList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      channels: [],
    }

    subscribeToChannels((channel) => {
      this.setState(prevState => ({
        channels: prevState.channels.concat([channel]),
      }));
    });
  }

  render() {
    return (
      <ul className="channel-list list-group">
        {this.state.channels.sort((a,b) => {
          if (a.name < b.name)
            return -1;
          if (a.name > b.name)
            return 1;
          return 0;
          }
        ).map(channel => {
          return(
            <Channel
              key={channel.id}
              id={channel.id}
              name={channel.name}
              selectChannel={this.props.selectChannel}
            />
          )
        })}
      </ul>
    );
  }
}

export default ChannelList
