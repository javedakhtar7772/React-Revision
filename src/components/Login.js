import React from 'react'
import './login.css';

const Login = () => {
  return (
    <div className='my-container'>
        
        <div style={{ border: '1px solid red', width: '25%' }} >
            <form>
                <label htmlFor=''>Email</label>
                <input type="text" />
                <br />
                <br />
                <label htmlFor=''>Password</label>
                <input type="text" />
                <br />
                <br />
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login