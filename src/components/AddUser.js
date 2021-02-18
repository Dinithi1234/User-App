import React, { useState } from 'react'

function AddUser({onAdd,onUpdate, edit}) {
    const [newuser, setNewUser] = useState(edit ? edit.name : '')

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!newuser){
            alert('Please add a User')
            return
        }

        if(edit){
            console.log('Add uSer new user', newuser);
            onUpdate(edit.id, newuser)
        } else {
            onAdd(newuser)
        }
        
        setNewUser('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            {/* <div className='form-control'> */}

            { edit ? (
                <>
                <input type='text' placeholder='Update user' value={newuser} onChange={(e)=> setNewUser(e.target.value)}/>
                <input type='submit' value='Update User'className='btn btn-block'/>
                </>
            ) :(
                <>
                <input type='text' placeholder='Add User' value={newuser} onChange={(e)=> setNewUser(e.target.value)}/>
                <input type='submit' value='Add User'className='btn btn-block'/>
                </>
            )

            }
                
            {/* </div> */}
        </form>
    )
}

export default AddUser
