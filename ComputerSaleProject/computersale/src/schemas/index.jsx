import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
    username: yup
        .string()
        .required('You need to enter your username.'),
    password: yup
        .string()
        .required('You need to enter your password.')
})