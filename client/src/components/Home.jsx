import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
        }
    }


    render() {
        console.log('username: ', this.state.username);
        return (
            <div>
                <form>
                    <input type="text" placeholder="Username"
                        value={this.state.username}
                        maxLength="20"
                        onChange={(evt) => this.setState({ username: evt.target.value })} />
                </form>
            </div>
        )
    }
}

export default Home;