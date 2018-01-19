import React, { Component } from 'react'
import './reset.css'
import './normalize.css'
import './App.css'

import Chat from './components/Chat'
import MessageBox from './components/MessageBox'
import ChannelList from './components/ChannelList'
import ChannelForm from './components/ChannelForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col">
            <ChannelForm />
            <ChannelList />
          </div>
          <div className="col-10">
            <Chat />
            <MessageBox />
          </div>
        </div>
      </div>
    )
  }
}

export default App
