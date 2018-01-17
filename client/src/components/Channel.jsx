import React from 'react'

function Channel (props){
    console.log(props);
    return (
        <div className="Channel">
            <ul>
                {props.channels.map(channel =>
                    <li key={channel.id}>{channel.name}</li>
                )}
            </ul>
        </div>
    )
}

export default Channel
