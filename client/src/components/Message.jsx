import React from 'react'

class Message extends React.Component {
  render(){
    return (
      <div className="message">
        <p>{this.props.name}: {this.props.message}</p>
      </div>
    )
  }
}

export default Message
