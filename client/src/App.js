import React, { Component } from 'react'
import './reset.css'
import './normalize.css'
import './App.css'

import Chat from './components/Chat'
import Home from './components/Home'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      activeChannel: [],
      activeChannelLoaded: false,
      channels: [],
      messages: []
    }
    this.changeUsername = this.changeUsername.bind(this)
  }

  changeUsername(username){
    this.setState({
      username: username
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.activeChannelLoaded ? (
          <Chat

          />
        ) : (
          <Home
            changeUsername={this.changeUsername}
          />
        )}
      </div>
    )
  }
}

export default App
