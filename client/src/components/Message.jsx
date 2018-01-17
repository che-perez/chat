import React from 'react'

function Message (props){
  return (
    <div className="message">
      <div className="message-owner">
        <p>{props.owner}:</p>
      </div>
      <div className="message-content">
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Message
