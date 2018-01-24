import React from 'react'

class Channel extends React.Component {
  render(){
    return (
      <div
      className="list-group-item list-group-item-action"
        onClick={() => this.props.selectChannel(this.props.id)}
      >
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Channel
