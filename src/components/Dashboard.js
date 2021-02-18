import React, { useState, useEffect } from 'react'
import Button from './Button'
import './Dashboard.css'
import axios from 'axios'
import Users from './Users'
import AddUser from './AddUser'

function Dashboard() {
    console.log('dashboard');
    const[users, setUsers] = useState([])
   // const [isUpdate, setUpdate] = useState(false)
    const url = 'https://602cbf9f30ba72001722356c.mockapi.io/users'


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
    const updateUser = (userId, newValue) => {
        console.log('im in Dashboard new value is',userId,newValue);
        if (!newValue|| /^\s*$/.test(newValue)) {
          return;
        }
        console.log('final data',userId, newValue);
        //setUsers(prev => prev.map(item => (item.id === userId ? newValue : item)));
      };

    return (
        <div className='container'>
            <header className='header '>
                <h1>User Dashboard</h1>
                {/* <Button color='green' text='Add' onClick={onClick}/> */}
            </header>

            <AddUser onAdd={addUser}  onUpdate={updateUser}/>

            {users.length>0 ? <Users users={users} onDelete={onDelete} updateUser={updateUser}/> : ('No Users To Show')}
        </div>
    )
}

export default Dashboard
