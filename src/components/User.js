import React from 'react'
import { useState } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa'
import AddUser from './AddUser'

function User({id, user, onDelete, onUpdate}) {



    return (
        <div className='user'>
          <h5>{user} <div >
            <FaTimes style={{color: 'rgb(243, 88, 88)', cursor:'pointer', marginRight: '20px'}}  onClick={onDelete} /> 
            <FaEdit style={{ color: 'rgb(70, 130, 180)', cursor:'pointer'}} onClick={onUpdate}/>
          </div></h5>  
        </div>
    )
}


export default User
