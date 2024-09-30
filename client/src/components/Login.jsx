import React, { useState } from 'react'
import '../app.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
// import Signup from './Signup'

const Login = () => { 
    const [username, setUsername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const navigate = useNavigate() 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        Axios.post('http://localhost:3000/auth/login',  //posted to the route(path), which handles registering new users
            {   
                username, 
                email, 
                password  

            }).then(response =>{
                
                if(response.data.status){
                    navigate('/home')
                }
                
            }).catch(err =>{
                console.log(err)
            })
    }
        
  return (
    <div className='maindiv'>
    
    
  <div className='formdiv'>
  <form className='sign-up-form' onSubmit={handleSubmit}> 
  <h2 className='sign-up'>Login</h2>


         <label htmlFor='email'>Email: </label>
         <input type='email' placeholder='email' 
      onChange={(e)=>setemail (e.target.value)
       }/>

       <label htmlFor='password'>Password: </label>
      <input type='password' placeholder='*********' 
     onChange={(e)=>setpassword(e.target.value)} />

       <button type='submit'>Login</button>
     <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
 </form>
  </div>
   
    </div>
  )
}

export default Login
