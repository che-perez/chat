import React from 'react'


function getColor(username){
  let sumChars = 0;
  for(let i = 0;i < username.length;i++){
    sumChars += username.charCodeAt(i);
  }

  const colors = [
    '#e67e22', // carrot
    '#2ecc71', // emerald
    '#3498db', // peter river
    '#8e44ad', // wisteria
    '#e74c3c', // alizarin
    '#1abc9c', // turquoise
    '#2c3e50', // midnight blue
  ];
  return colors[sumChars % colors.length];
}


function Message (props){
  return (
    <div className="message">
      <div className="message-owner">
        <p>{props.owner}: </p>
      </div>
      <div className="message-content">
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Message
