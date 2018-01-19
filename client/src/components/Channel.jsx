import React from 'react';
import { Link } from 'react-router-dom';

function Channel (props){
    console.log(props);
    return (
        <div className="Channel">
            <ul>
                {props.channels.map(channel =>
                    <Link to={`/channel-${channel.name}`} key={channel.id} onClick={() => props.selectedChannel(channel.name)}>
                        <li>{channel.name}</li>
                    </Link>
                )}
            </ul>
        </div>
    )
}

export default Channel
