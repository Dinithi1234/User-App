import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import history from './history'


function Login() {
    const [data, setData] = useState({email:'',password:''})
    const [isError, setError] = useState(false)

    const handleChange = (event) =>{
        const value = event.target.value
        setData(
            {
                ...data,
                [event.target.name] :value
            }
        )
        //console.log(data);
    }

    const handleSubmit = (event) => {
        
        if(data.email=='' || data.password==''){
            //alert('Enter your credentials')
            event.preventDefault();
            setError(true)
        } else{
            history.push('/dashboard')
        }
    }

    return (
        <div className='login'>
            <Form>
            <h2 className='title'>Sign In</h2>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} />    
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
            </Form.Group>
            <Form.Text className={isError? "error":"noError"}>
                 Enter your credentials
            </Form.Text>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Sign In
            </Button>
            </Form>
        </div>
    )
}

export default Login
