import React from 'react'

function Channel (props){
    return (
        <li className="list-group-item list-group-item-action" onClick={() => props.selectChannel(props.id, true)}>{props.name}</li>
    )
}

export default Channel
