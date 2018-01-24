import React from 'react'

class UsernameForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username: ""
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
    this.props.changeUsername(this.state.username || "Anonymous")
  }

  render(){
    return (
      <div className="messaging center-block">
      <div className="row">
      <div className=" col-md-12">
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          className="form-control"
          placeholder="Enter a name (optional)"
          onChange={this.handleChange}
          maxLength="20"
        ></input>
        <button className="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
      </div>
    )
  }
}

export default UsernameForm
