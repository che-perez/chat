import React from 'react'

class Channel extends React.Component {

  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }

  render(){
    return (
      <div
        className="channel"
        onClick={this.handleSelect}
      >
        <p>Channel A</p>
      </div>
    )
  }
}

export default Channel
