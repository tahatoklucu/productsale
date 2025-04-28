import React, { useState } from 'react'
import { useFormik } from 'formik'
import { registerSchema } from '../schemas';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import { motion } from 'framer-motion';
import { Alert } from 'react-bootstrap';

function Register() {

    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [errorShowAlert, setErrorShowAlert] = useState(false);

    const {values, errors, handleChange, handleSubmit} = useFormik({
            initialValues: {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                isAccepted: '',
            },
            validationSchema: registerSchema,
            onSubmit: (values) => {
                const users = JSON.parse(localStorage.getItem('users')) || [];

                if(users.some(user => user.email === values.email)) {
                    setErrorShowAlert(true);
                    setTimeout(() => {
                        const alertElement = document.querySelector('.fade-alert');
                        if(alertElement) {
                          alertElement.classList.add('hiding');
                          setTimeout(() => setErrorShowAlert(false), 500);
                        }
                      }, 3000)
                    return;
                }

                users.push({
                    id: Date.now(),
                    username: values.username,
                    email: values.email,
                    password: values.password
                });

                localStorage.setItem('users', JSON.stringify(users));
                setShowAlert(true);
                setTimeout(() => {
                    const alertElement = document.querySelector('.fade-alert');
                    if(alertElement) {
                      alertElement.classList.add('hiding');
                      setTimeout(() => setShowAlert(false), 500);
                    }
                  }, 3000)
                  setTimeout(() => {
                    navigate('/login');
                  }, 3000)
                
            },
        });
  return (
    <motion.form onSubmit={handleSubmit} className='register-mainForm' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
        <div className='register-div'>
            <label className='register-label'>Username</label>
            <input type='text' value={values.username} onChange={handleChange} id='username' placeholder='Please enter your username' className={errors.username ? ' register-input input-error' : 'register-input'}/>
            {errors.username && <p className='error'>{errors.username}</p>}
        </div>
        <div className='register-div'>
            <label className='register-label'>Email</label>
            <input type='email' value={values.email} onChange={handleChange} id='email' placeholder='Please enter your email' className={errors.email ? ' register-input input-error' : 'register-input'}/>
            {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='register-div'>
            <label className='register-label'>Password</label>
            <input type='password' value={values.password} onChange={handleChange} id='password' placeholder='Please enter your password' className={errors.password ? 'register-input input-error' : 'register-input'}/>
            {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <div className='register-div'>
            <label className='register-label'>Confirm Password</label>
            <input type='password' value={values.confirmPassword} onChange={handleChange} id='confirmPassword' placeholder='Please enter your password again' className={errors.confirmPassword ? ' register-input input-error' : 'register-input'}/>
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        </div>
        <button className='register-button' type='submit'>Register</button>
        {showAlert && (
            <Alert 
                variant="success" 
                onClose={() => setShowAlert(false)} 
                dismissible
                className={showAlert ? "fade-alert" : "fade-alert hiding"}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 9999,
                    width: 'auto',
                    minWidth: '200px'
                }}
            >
                You have successfully registered.
            </Alert>
        )}
        {errorShowAlert && (
            <Alert 
                variant="success" 
                onClose={() => setErrorShowAlert(false)} 
                dismissible
                className={errorShowAlert ? "fade-alert" : "fade-alert hiding"}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 9999,
                    width: 'auto',
                    minWidth: '200px'
                }}
            >
                You cannot re-register with an already registered email.
            </Alert>
        )}
        <Link to='/login' className='register-link'>Back to the login page</Link>
    </motion.form>
  )
}

export default Register