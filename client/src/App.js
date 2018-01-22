import React, { Component } from 'react'
import './reset.css'
import './normalize.css'
import './App.css'

import Footer from './components/Footer'
import Home from './components/Home'
import Chatting from './components/Chatting'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      activeChannel: null,
      username: "anon"
    }
    this.selectChannel = this.selectChannel.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
  }

  changeUsername(username){
    this.setState({
      username: username
    })
  }

  selectChannel(channel){
    this.setState({
      activeChannel: channel
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.activeChannel ? (
          <Chatting
            activeChannel={this.state.activeChannel}
            selectChannel={this.selectChannel}
            username={this.state.username}
          />
        ) : (
          <Home
            username={this.state.username}
            changeUsername={this.changeUsername}
            selectChannel={this.selectChannel}
          />
        )}
      </div>
    )
  }
}

export default App
