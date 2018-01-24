import React from 'react'
import Moment from 'react-moment'

class Message extends React.Component {
  render(){
    console.log('msg', this.props)
    return (
      <div className="message">
        <Moment fromNow date={this.props.date} />
        <p>{this.props.name}:  <span className="chat-message">{this.props.message}</span></p>

      </div>
    )
  }
}

export default Message
