import React, { Component } from 'react';

import { createChannel } from '../api';

class ChannelForm extends Component {
  state = {
    channelName: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    createChannel(this.state.channelName);
    this.setState({
      channelName: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.channelName}
            onChange={(evt) => this.setState({ channelName: evt.target.value })}
            placeholder="New Channel" required />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
export default ChannelForm;