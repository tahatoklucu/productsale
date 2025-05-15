import { useFormik } from 'formik'
import React, { useState } from 'react'
import { loginSchema } from '../schemas';
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Alert } from 'react-bootstrap';

function Login({setLoggedIn}) {

    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [errorShowAlert, setErrorShowAlert] = useState(false);
    const [logged, setLogged] = useState(false);

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
                setShowAlert(true);
                setTimeout(() => {
                    const alertElement = document.querySelector('.fade-alert');
                    if(alertElement) {
                      alertElement.classList.add('hiding');
                      setTimeout(() => setShowAlert(false), 500);
                    }
                  }, 3000)
                return;
            }

            if(user.password !== values.password) {
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

            localStorage.setItem('currentUser', JSON.stringify({
                id: user.id,
                username: user.username,
                email: user.email,
                password: user.password,
                avatar: user.avatar
            }));
            setLoggedIn(true);
            setLogged(true);
                setTimeout(() => {
                    const alertElement = document.querySelector('.fade-alert');
                    if(alertElement) {
                      alertElement.classList.add('hiding');
                      setTimeout(() => setLogged(false), 500);
                    }
                  }, 3000)
            setTimeout(() => {   
                navigate('/');
            }, 3000)
        },
    });

    const loginValues = [values.email, values.password]
  return (
        <motion.form onSubmit={handleSubmit} className='mainForm' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
            <div className='loginTitle'>Login</div>
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
            {showAlert && (
                <Alert 
                    variant="danger" 
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
                    Invalid email or password!
                </Alert>
            )}
            {errorShowAlert && (
                <Alert 
                    variant="danger" 
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
                    Incorrect password!
                </Alert>
            )}
            {logged && (
                <Alert 
                    variant="success" 
                    onClose={() => setLogged(false)} 
                    dismissible
                    className={logged ? "fade-alert" : "fade-alert hiding"}
                    style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        zIndex: 9999,
                        width: 'auto',
                        minWidth: '200px'
                    }}
                >
                    You have successfully logged in.
                </Alert>
            )}
            <Link to='/register' className='register-link'>Create a new account</Link>
        </motion.form>
  )
}

export default Login