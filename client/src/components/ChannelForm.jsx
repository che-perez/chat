import React from 'react'

import { createChannel } from '../api'

class ChannelForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    if (this.state.name){
      let uniqueName = true
      let newChannelId = null
      this.props.channels.map(channel => {
        if (channel.name === this.state.name){
          uniqueName = false
        }
      })
      if (uniqueName === true){
        createChannel(this.state.name)
      }
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          placeholder="New Channel Name"
          onChange={this.handleChange}
        ></input>
        <button>Create</button>
      </form>
    )
  }
}

export default ChannelForm
