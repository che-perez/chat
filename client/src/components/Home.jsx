import React, { Component } from 'react'

import ChannelList from './ChannelList'

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.changeUsername(this.state.username)
    this.setState({
      username: ""
    })
  }

  handleChange(e){
    e.preventDefault()
    this.setState({
      username: e.target.value
    })
  }

  render(){
    return (
      <div>
        <p>Home</p>
        <p>Your name is: {this.props.username}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.username} placeholder="Enter a username here (optional)" />
          <button type="submit">Submit</button>
        </form>
        <div className="row mx-auto" style={{width: '30vw', height: '40vh'}}>
          <ChannelList
            selectChannel={this.props.selectChannel}
          />
        </div>
      </div>
    )
  }
}

export default Home
