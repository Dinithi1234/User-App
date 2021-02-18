import React, { useState, useEffect } from 'react'

import './Dashboard.css'
import axios from 'axios'
import Users from './Users'
import AddUser from './AddUser'
import UpdateUser from './UpdateUser'

function Dashboard() {
    console.log('dashboard');
    const[users, setUsers] = useState([])
    const [isUpdate, setUpdate] = useState(false)
    const [updateUserData, setUpdateUserData] = useState([])
    const url = 'https://602e21f94410730017c5009a.mockapi.io/users'


    useEffect(() => {
        axios
        .get(url)
        .then(response => {
            //console.log(response.data)
            setUsers(response.data)
            
        })
        .catch(error => console.log(error))
    },[])

    const onClick =() => {
        console.log('Click');
    }

    //Add User
    const addUser = (user)=> {
        //console.log(user);
        //const id = Math.floor(Math.random()*1000)+1
        const newUser ={fullname: user} 
        console.log(newUser);
        axios
        .post(url, newUser)
        .then( response => {
            console.log(response)
            setUsers([response.data,...users])

        })
        .catch(error=>console.log(error))

    }

    //Delete user
    const onDelete = (userId) => {
        console.log('delete',userId);
        axios.delete(`${url}/${userId}` )
        .then(response => {
            console.log(response.data)
            setUsers(users.filter(user => user.id !== userId))
            
        })
        .catch(error => console.log(error))
    }

    //Update User
    let updateID,oldName
    const getValueToBeUpdated = (userId, name) =>{
        console.log('I got the values', userId, name);
        setUpdateUserData({id:userId,fullname:name})
        
        updateID = userId
        oldName = name
        setUpdate(true)
        console.log(isUpdate);
        console.log(updateUserData);
    }

    const updateUser = (newValue) => {
        console.log('im in Dashboard new value is',newValue);
        if (!newValue|| /^\s*$/.test(newValue)) {
          return;
        }
        console.log('final data', newValue);
        setUpdate(false)
        //setUsers(prev => prev.map(item => item.id === updateUserData.id ? {...item,fullname:newValue} : item));
        const updateduser ={fullname: newValue} 
        axios.put(`${url}/${updateUserData.id}`, updateduser)
        .then( response => {
            console.log(response)
            setUsers(prev => prev.map(item => item.id === response.data.id ? {...item,fullname:response.data.fullname} : item));
            //setUsers([response.data,...users])

        })
        .catch(error=>console.log(error))
      };
      //item.id === updateUserData.id ? newValue : item))
      //el => el.key === key? { ...el, status: 'done' }: el

    return (
        <div className='container'>
            <header className='header '>
                <h1>User Dashboard</h1>
                {/* <Button color='green' text='Add' onClick={onClick}/> */}
            </header>

            {isUpdate? 
            <UpdateUser name={updateUserData.fullname} onUpdate={updateUser}/> 
            : 
            <AddUser onAdd={addUser}/>
            }

            {users.length>0 ? <Users users={users} onDelete={onDelete} onUpdate={getValueToBeUpdated}/> : ('No Users To Show')}
        </div>
    )
}

export default Dashboard
