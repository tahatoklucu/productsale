import { useFormik } from 'formik'
import React from 'react'
import { loginSchema } from '../schemas';
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Login({setLoggedIn}) {

    const navigate = useNavigate();

    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.email === values.email);

            if(!user) {
                alert('Invalid email or password!');
                return;
            }

            if(user.password !== values.password) {
                alert('Incorrect password!');
                return;
            }

            localStorage.setItem('currentUser', JSON.stringify({
                id: user.id,
                username: user.username,
                email: user.email,
            }));
            setLoggedIn(true);
            navigate('/');
        },
    });

    const loginValues = [values.username, values.password]
  return (
    <motion.form onSubmit={handleSubmit} className='mainForm' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
        <div className='form-div'>
            <label className='form-label'>Email</label>
            <input type='email' value={values.email} onChange={handleChange} id='email' placeholder='Please enter your email' className={errors.email ? ' form-input input-error' : 'form-input'}/>
            {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='form-div'>
            <label className='form-label'>Password</label>
            <input type='password' value={values.password} onChange={handleChange} id='password' placeholder='Please enter your password' className={errors.password ? 'form-input input-error' : 'form-input'}/>
            {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <button className='login-button' type='submit'>Log In</button>
        <Link to='/register' className='register-link'>Create a new account</Link>
    </motion.form>
  )
}

export default Login