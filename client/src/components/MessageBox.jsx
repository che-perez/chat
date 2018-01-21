import React, { Component } from 'react';
import {  publishMessage } from '../api';

class MessageBox extends Component {
  state = {
    message: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    publishMessage({
      channelId: this.props.channelId,
      name: this.props.username,
      message: this.state.message,
    });
    this.setState({
      message: '',
    });
  }

  render() {
    console.log('from box', this.props)
    return (
      <div className="message-box">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.message}
            onChange={(evt) => this.setState({ message: evt.target.value })}
            placeholder="Writte" required />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
export default MessageBox;
