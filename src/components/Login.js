import React from 'react'
import './login.css';
import { useFormik } from 'formik';
import * as Yup from "yup";

const Login = () => {

  const loginValidation = Yup.object().shape({
    email: Yup.string().required('please Provide email').email("Invalid Email"),
    password: Yup.string().required('please Provide Password'),
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      // setSubmitting(false)
      console.log(values);
      setTimeout(() => {
        // setSubmitting(false);
        resetForm();
      }, 2000);
    },
    validationSchema: loginValidation

  });

  return (

    <div className='my-container'>

      <div className='card shadow-lg' style={{ border: '1px solid red', width: '25%' }} >

        <div className='card-body'>
          <h2 className='text-center my-3'>Login Form</h2>
          <form onSubmit={loginForm.handleSubmit} >
            <label htmlFor=''>Email  Address</label>
            <input
              type="text"
              className='form-control'
              id="email"
              onChange={loginForm.handleChange}
              value={loginForm.values.email} />
            <p className='text-danger'>{loginForm.errors.email}</p>
            <br />
            <br />
            <label htmlFor=''>Password</label>
            <input
              type="text"
              className='form-control'
              id="password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password} />
            <p className='text-danger'>{loginForm.errors.password}</p>
            <br />
            <br />
            <button disabled={loginForm.isSubmitting} type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login