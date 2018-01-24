import React from 'react'

import { publishMessage } from '../api'

class ChatForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    e.preventDefault()
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    if (this.state.message){
      publishMessage(this.props.activeChannel, this.props.username, this.state.message)
    }
    this.setState({
      message: ''
    })
  }

  render(){
    return (
      <div className="messaging center-block">
      <div className="row">
      <div className=" col-md-12">
      <form className="input-group" onSubmit={this.handleSubmit}>

        <input 
          type="text"
          value={this.state.message}
          className="form-control"
          placeholder=" Enter message"
          onChange={this.handleChange}
        ></input>
        <button className="btn btn-primary">Send</button>  
      </form>
      </div>
      </div>
      </div>
    )
  }
}

export default ChatForm
