import { useFormik } from 'formik'
import React from 'react'
import { loginSchema } from '../schemas';
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const {values, errors, isSubmitting, handleChange, handleSubmit} = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: () => {
            const username = localStorage.getItem("username");
            const email = localStorage.getItem("email");
            const password = localStorage.getItem("password");
            if(values.username == username && values.password == password) {
                navigate("/");
            }
        }
    });

    const loginValues = [values.username, values.password]
  return (
    <form onSubmit={handleSubmit} className='mainForm'>
        <div className='form-div'>
            <label className='form-label'>Username</label>
            <input type='text' value={values.username} onChange={handleChange} id='username' placeholder='Please enter your username' className={errors.username ? ' form-input input-error' : 'form-input'}/>
            {errors.username && <p className='error'>{errors.username}</p>}
        </div>
        <div className='form-div'>
            <label className='form-label'>Password</label>
            <input type='password' value={values.password} onChange={handleChange} id='password' placeholder='Please enter your password' className={errors.password ? 'form-input input-error' : 'form-input'}/>
            {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <button className='login-button' type='submit'>Log In</button>
        <Link to='/register' className='register-link'>Create a new account</Link>
    </form>
  )
}

export default Login