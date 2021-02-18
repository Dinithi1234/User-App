import React, { useState, useEffect } from 'react'
import Button from './Button'
import './Dashboard.css'
import axios from 'axios'
import Users from './Users'
import AddUser from './AddUser'
import UpdateUser from './UpdateUser'

function Dashboard() {
    const[users, setUsers] = useState([])
    const [isUpdate, setUpdate] = useState(false)
    const [updateUserData, setUpdateUserData] = useState([])
    const url = 'https://602e21f94410730017c5009a.mockapi.io/users'

    useEffect(() => {
        axios
        .get(url)
        .then(response => {
            setUsers(response.data)    
        })
        .catch(error => console.log(error))
    },[])

    //Add User
    const addUser = (user)=> {
        const newUser ={fullname: user} 
        axios.post(url, newUser)
            .then( response => {
                setUsers([response.data,...users])
            })
            .catch(error=>console.log(error))
    }

    //Delete user
    const onDelete = (userId) => {
        axios.delete(`${url}/${userId}` )
            .then(response => {
                setUsers( users.filter( user => user.id !== userId ) )    
            })
            .catch(error => console.log(error))
    }

    //Update User
    const getValueToBeUpdated = (userId, name) => {
        setUpdateUserData( { id: userId, fullname: name } )
        setUpdate(true)
    }

    const updateUser = (newValue) => {
        if (!newValue|| /^\s*$/.test(newValue)) {
          return;
        }
        setUpdate(false)

        const updatedUser ={fullname: newValue} 
        axios.put(`${url}/${updateUserData.id}`, updatedUser)
            .then( response => {
                setUsers( prev => {
                    return prev.map( item => {
                        if (item.id === response.data.id) {
                            return {
                                ...item,
                                fullname: response.data.fullname
                            }
                        } else {
                            return item
                        }
                             
                    })
                })
            })
            .catch(error=>console.log(error))
      };

    return (
        <div className='container'>
            <header className='header '>
                <h1>User Dashboard</h1>
            </header>

            {
                isUpdate ? 
                <UpdateUser name={updateUserData.fullname} onUpdate={updateUser}/> : 
                <AddUser onAdd={addUser}/>
            }

            {
                users.length > 0 ? 
                <Users users={users} onDelete={onDelete} onUpdate={getValueToBeUpdated}/> : 
                ('No Users To Show')
            }
            
        </div>
    )
}

export default Dashboard