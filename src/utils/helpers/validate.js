import * as Yup from 'yup'

export const schema = Yup.object().shape({
   email: Yup.string()
      .email('Invalid email address')
      .required('Email is required')
      .matches(/@gmail\.com$/, 'Email must end with @gmail.com'),

   password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
})
