import React, { useState } from 'react'

function UpdateUser({name, onUpdate}) {


    const [newuser, setNewUser] = useState(name)

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!newuser){
            alert('Please add a User')
            return
        }
        console.log('im in update new user is', newuser);
        onUpdate(newuser)
        setNewUser('')
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            {/* <div className='form-control'> */}
            <input type='text' placeholder='Update User' value={newuser} onChange={(e)=> setNewUser(e.target.value)}/>
            <input type='submit' value='Update User'className='btn btn-block'/>  
            {/* </div> */}
        </form>
    )
}

export default UpdateUser
