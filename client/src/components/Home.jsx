import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log('username: ', this.props.username);
        return (
            <div>
                <form>
                    <input type="text" placeholder="Username"
                        value={this.props.username}
                        maxLength="20"
                        onChange={(evt) => this.setState({ username: evt.target.value })} />
                </form>
            </div>
        )
    }
}

export default Home;