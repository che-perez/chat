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
      createChannel(this.state.name)
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          placeholder="New channel name"
          onChange={this.handleChange}
        ></input>
        <button>Create</button>
      </form>
    )
  }
}

export default ChannelForm
