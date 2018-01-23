import React from 'react';
import { Link } from 'react-router-dom';

function trimName(name) {
    name = name.toLowerCase().replace(/\s+/g, '');
    return name;
}

function Channel (props){
    console.log(props);
    return (
        <div className="Channel">
            <ul>
                {props.channels.map(channel =>
                    <Link to={`/channel/${trimName(channel.name)}`} key={channel.id} onClick={() => props.selectedChannel(channel.name, channel.id)}>
                        <li>{channel.name}</li>
                    </Link>
                )}
            </ul>
        </div>
    )
}

export default Channel