import React from 'react'
import './login.css';
import { useFormik } from 'formik';

const Login = () => {

  const loginForm = useFormik({
    initialValues:{
      email : " ",
      password : " ",
    },
    onSubmit: (values,{ resetForm, setSubmitting}) => {
      setSubmitting(true);
      console.log(values);
      // resetForm();
    },
  
  })

  return (

    <div className='my-container'>
        
        <div className='card shadow-lg' 
        style={{ border: '1px solid red', width: '25%' }} >
            <form onSubmit={loginForm.handleSubmit} >
              <div className='card-body'>
                <h2 className='text-center my-3'>Login Form</h2>
                <label htmlFor=''>Email</label>
                <input type="text" className='form-control' 
                id="email"onChange={loginForm.handleChange}value={loginForm.values.email}/>
                <br />
                <br />
                <label htmlFor=''>Password</label>
                <input type="text"className='form-control'
                id="password"onChange={loginForm.handleChange}value={loginForm.values.password}  />
                <br />
                <br />
                <button disabled={loginForm.isSubmitting} className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login