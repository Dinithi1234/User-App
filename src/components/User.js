import React from 'react'
import { useState } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa'
import AddUser from './AddUser'

function User({id, user, onDelete, updateUser}) {
    const [edit, setEdit] = useState({
        id: null,
        name: ''
      });

      const submitUpdate = (name) => {
          console.log('User ', name, edit.id);
        updateUser(edit.id, name);
        setEdit({
          id: null,
          name: ''
        });
      };

      if(edit.id){
          console.log('User edit id', edit.id);
          return <AddUser edit={edit} onUpdate={submitUpdate} />
      }

    return (
        <div className='user'>
          <h5>{user} <div >
            <FaTimes style={{color: 'rgb(243, 88, 88)', cursor:'pointer', marginRight: '20px'}}  onClick={onDelete} /> 
            <FaEdit style={{ color: 'rgb(70, 130, 180)', cursor:'pointer'}} onClick={() => setEdit({ id: id, name: user })}/>
          </div></h5>  
        </div>
    )
}


export default User
