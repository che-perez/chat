import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './reset.css'
import './App.css'

import Home from './components/Home';
import ChannelList from './components/ChannelList';
import ChannelForm from './components/ChannelForm';
import Chat from './components/Chat';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedChannel: '',
      channelId: null,
      username: '',
    }
  }

  selectChannel = (channel, id) => {
    channel = channel.toLowerCase().replace(/\s+/g, '');
    this.setState({
      selectedChannel: channel,
      channelId: id,
    });
  }


  render() {
    console.log(this.state);
    return (
      <Router>
      <div className="App">
      <input type="text" placeholder="Username"
                        value={this.state.username}
                        maxLength="20"
                        onChange={(evt) => this.setState({ username: evt.target.value })} />
  
        <ChannelForm />
        <ChannelList selectedChannel={this.selectChannel}/>
        <Route exact path={`/channel/${this.state.selectedChannel}`} 
            render={() => (<Chat channelId={this.state.channelId} 
                                username={this.state.username}/> )} />
      </div>
      </Router>
    )
  }
}

export default App
