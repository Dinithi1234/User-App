import React, { useState } from 'react'

function AddUser({onAdd}) {
    const [newUser, setNewUser] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!newUser){
            alert('Please add a User')
            return
        } 

        onAdd(newUser)
        setNewUser('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <input type='text' placeholder='Add User' value={newUser} onChange={(e)=> setNewUser(e.target.value)}/>
            <input type='submit' value='Add User'className='btn btn-block'/>  
        </form>
    )
}

export default AddUser
