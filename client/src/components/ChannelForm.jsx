import React, { Component } from 'react';

import { createChannel } from '../api';

class ChannelForm extends Component {

  state = {
    channelName: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    createChannel(this.state.channelName)
    this.setState({
      channelName: ''
    });
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      channelName: e.target.value
    })
  }

  render() {
    return (
      <div className="col-sm">
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="newChannelName" className="label pb-1 mt-2 notouch">Create Channel</label>
              <input
                id="newChannelName"
                type="text"
                className="form-control"
                value={this.state.channelName}
                onChange={this.handleChange}
                placeholder="New Channel" required />
            </div>
            <div className="form-group">
            {this.state.channelName ? (
              this.state.channelName === ' ' ? (
                this.setState({
                  channelName: ''
                })
              ) : (
                <button id="newChannelSubmitButton" type="submit" className="btn btn-primary">Create</button>
              )) : (
                <button
                  id="newChannelSubmitButton" type="submit" className="btn btn-primary" disabled>Create</button>
              )}
            </div>
        </form>
      </div>
    );
  }
}
export default ChannelForm;
