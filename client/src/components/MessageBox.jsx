import React, { Component } from 'react';

import {  publishMessage } from '../api';

class MessageBox extends Component {
  state = {
    message: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    publishMessage(this.props.activeChannel, this.props.username, this.state.message)
    this.setState({
      message: '',
    });
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form className="form-inline row mx-auto" onSubmit={this.handleSubmit}>
          <input
            id="messageBoxInput"
            type="text"
            className="form-control col"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Enter message here" required />
          <button type="submit" className="btn btn-primary col-1">Send</button>
        </form>
      </div>
    );
  }
}
export default MessageBox;
