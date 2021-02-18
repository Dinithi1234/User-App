import React, { useState } from 'react'

function AddUser({onAdd,onUpdate, edit}) {
    const [newuser, setNewUser] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!newuser){
            alert('Please add a User')
            return
        }

        
        
        onAdd(newuser)
        
        
        setNewUser('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            {/* <div className='form-control'> */}
            <input type='text' placeholder='Add User' value={newuser} onChange={(e)=> setNewUser(e.target.value)}/>
            <input type='submit' value='Add User'className='btn btn-block'/>  
            {/* </div> */}
        </form>
    )
}

export default AddUser
