import React from 'react'
import User from './User'

function Users({users, onDelete, onUpdate}) {
    return (
        <div>
            {users.map((user)=>(
                <User 
                    key={user.id}  
                    user={user.fullname} 
                    onDelete={()=>onDelete(user.id)} 
                    onUpdate={() => onUpdate(user.id, user.fullname)}
                />
            ))}
        </div>
    )
}

export default Users
