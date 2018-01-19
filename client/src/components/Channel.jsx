import React from 'react'

function Channel (props){
    console.log(props.name)
    return (
        <li className="list-group-item list-group-item-action">{props.name}</li>
    )
}

export default Channel
