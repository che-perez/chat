import React, { Component } from 'react'
import './App.css'

import { subscribeToTimer } from './api'

import ChannelList from './components/ChannelList'
import Chat from './components/Chat'
import UserList from './components/UserList'

class App extends Component {
  constructor(props) {
    super(props)
    subscribeToTimer((timestamp) => {
      this.setState({
        timestamp
      })
    })
  }

  state = {
    timestamp: 'no timestamp yet'
  }

  render() {
    return (
      <div className="App">
        <ChannelList />
      </div>
    )
  }
}

export default App
