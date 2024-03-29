import * as Yup from 'yup'

export const schema = Yup.object().shape({
   email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),

   password: Yup.string().trim().required('Password is required'),
})

export const validationSchema = Yup.object().shape({
   maxOfGuests: Yup.number()
      .typeError('Max guests is required')
      .required('Max guests is required')
      .positive('Max guests must be a positive number')
      .integer('Max guests must be an integer')
      .min(1, 'Guests must be more than one'),
   price: Yup.number()
      .typeError('Price is required')
      .required('Price is required')
      .positive('Price must be a positive number')
      .min(10, 'Price must be more than 10$'),
   title: Yup.string().required('House title is required'),
   description: Yup.string().required('Description is required'),
   region: Yup.string().required('Region is required'),
   province: Yup.string().required('Town/Province is required'),
   address: Yup.string().required('Address is required'),
})
