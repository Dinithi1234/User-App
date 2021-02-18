import React, { useState } from 'react'

function UpdateUser({name, onUpdate}) {


    const [newuser, setNewUser] = useState(name)

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!newuser){
            alert('Please add a User')
            return
        }
        onUpdate(newuser)
        setNewUser('')
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <input type='text' placeholder='Update User' value={newuser} onChange={(e)=> setNewUser(e.target.value)}/>
            <input type='submit' value='Update User'className='btn btn-block'/>  
        </form>
    )
}

export default UpdateUser
