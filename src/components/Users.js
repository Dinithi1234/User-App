import React from 'react'
import User from './User'

function Users({users, onDelete, updateUser}) {
    console.log('im here');
    
    return (
        <div>
            {users.map((user)=>(
                <User key={user.id} id = {user.id} user={user.fullname} onDelete={()=>onDelete(user.id)} updateUser={()=>updateUser(user.id, user.fullname)}/>
            ))}
        </div>
    )
}

export default Users
