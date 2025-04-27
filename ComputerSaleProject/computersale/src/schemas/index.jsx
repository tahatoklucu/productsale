import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('You need to enter your email.'),
    password: yup
        .string()
        .required('You need to enter your password.')
});

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, 'The username must be a minimum of 3 characters long.')
        .required('You need to enter your username.'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('You need to enter  your email address.'),
    password: yup
        .string()
        .min(5, 'Your password must be longer than 5 characters.')
        .matches(passwordRules, {
            message: 'Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number.'
        })
        .required('You need to enter your password.'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'The passwords do not match.')
        .required('You need to enter your password again.'),
    isAccepted: yup
        .boolean()
        .oneOf([true], 'Please accept the terms of use.'),
});