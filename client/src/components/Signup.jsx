import React, { useState } from 'react'
import '../app.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'

const Signup = () => { 
    const [username, setUsername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const navigate = useNavigate() 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        Axios.post('http://localhost:3000/auth/signup',  //posted to the route(path), which handles registering new users
            {   
                username, 
                email, 
                password  

            }).then(response =>{
                
                if(response.data.status){
                    navigate('/login')
                }
                
            }).catch(err =>{
                console.log(err)
            })
    }
        
  return (
    <div className='maindiv'>
    
    
  <div className='formdiv'>
  <form className='sign-up-form' onSubmit={handleSubmit}> 
  <h2 className='sign-up'>Signup</h2>

<label htmlFor='username'>Username: </label>
 <input type='text' placeholder='username' 
 onChange={(e)=> setUsername(e.target.value)}/>

 <label htmlFor='email'>Email: </label>
 <input type='email' placeholder='email' 
 onChange={(e)=>setemail (e.target.value)
 }/>

 <label htmlFor='password'>Password: </label>
 <input type='password' placeholder='*********' 
 onChange={(e)=>setpassword(e.target.value)} />

 <button type='submit'>Signup</button>
 <p>Have an account? <Link to='/login'>Login</Link></p>
 </form>
  </div>
   
    </div>
  )
}

export default Signup
