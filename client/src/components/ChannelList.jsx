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
    return (
      <div>
        <Channel channels={this.state.channels} selectedChannel={this.props.selectedChannel}/>
      </div>
    );
  }
}

export default ChannelList
