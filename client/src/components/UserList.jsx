import React from 'react'

import User from './User'

function UserList (props){
  return(
    <div className="user-list">
      <User user_name="New User A"/>
      <User user_name="New User B"/>
      <User user_name="New User C"/>
    </div>
  )
}

export default UserList
