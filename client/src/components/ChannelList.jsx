import React, { Component } from 'react';

import { subscribeToChannels } from '../api';

import Channel from './Channel';

class ChannelList extends Component {
  constructor(props) {
    super(props);
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
    console.log(this.state.channels)
    return (
      <ul className="list-group">
        {this.state.channels.map(channel => {
          return(
            <Channel
              key={channel.id}
              name={channel.name}
            />
          )
        })}
      </ul>
    );
  }
}

export default ChannelList
