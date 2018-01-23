import React from 'react'

import ChannelList from './ChannelList'
import Logo from './Logo'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "Anonymous"
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    e.preventDefault()
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.changeUsername(e.target.value)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          placeholder="Enter a name (optional)"
          onChange={this.handleChange}
        ></input>
        <button>Submit</button>
      </form>
    )
  }
}

export default Home
