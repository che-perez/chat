import React from 'react'

class Channel extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div
        className="channel"
        onClick={() => this.props.selectChannel(this.props.id)}
      >
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Channel
