import React from 'react'
import { useFormik } from 'formik'
import { registerSchema } from '../schemas';
import { Link } from 'react-router-dom';


const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    });
    actions.resetForm();
}

function Register() {
    const {values, errors, isSubmitting, handleChange, handleSubmit} = useFormik({
            initialValues: {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                isAccepted: '',
            },
            validationSchema: registerSchema,
            onSubmit
        });
  return (
    <form onSubmit={handleSubmit} className='mainForm'>
        <div className='form-div'>
            <label className='form-label'>Username</label>
            <input type='text' value={values.username} onChange={handleChange} id='username' placeholder='Please enter your username' className={errors.username ? ' form-input input-error' : 'form-input'}/>
            {errors.username && <p className='error'>{errors.username}</p>}
        </div>
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
        <div className='form-div'>
            <label className='form-label'>Confirm Password</label>
            <input type='password' value={values.confirmPassword} onChange={handleChange} id='confirmPassword' placeholder='Please enter your password again' className={errors.confirmPassword ? ' form-input input-error' : 'form-input'}/>
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        </div>
        <div className='form-div'>
            <input type='checkbox' name='isAccepted' className={errors.isAccepted ? 'input-error' : ''} /> 
            <span className='form-span'>I accept to the terms of use.</span>
            {errors.isAccepted && <p className='error'>{errors.isAccepted}</p>}
        </div>
        <button className='login-button'>Register</button>
        <Link to='/login' className='back-link'>Back to the login page</Link>
    </form>
  )
}

export default Register