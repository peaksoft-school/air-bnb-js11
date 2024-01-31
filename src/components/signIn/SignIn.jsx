import { Box, Typography, styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../UI/Input'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import { schema } from '../../utils/helpers/validate'

const SignIn = ({ isOpenModal, onClose }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: yupResolver(schema),
   })

   const onSubmit = () => {
      onClose()
      reset()
   }

   return (
      <StyledModal open={isOpenModal} onClose={onClose}>
         <Box>
            <h3 className="heading">Sign in </h3>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
               <Box className="input-container">
                  <Input
                     type="email"
                     placeholder="Login"
                     {...register('email')}
                  />
                  <Typography className="validation">
                     {errors.email ? `${errors.email.message}` : ''}
                  </Typography>
               </Box>

               <Box className="input-container">
                  <Input
                     type="password"
                     placeholder="Password"
                     {...register('password')}
                  />
                  <Typography className="validation">
                     {errors.password ? `${errors.password.message}` : ''}
                  </Typography>
               </Box>

               <Button type="submit">SIGN IN</Button>
            </form>
         </Box>
      </StyledModal>
   )
}

export default SignIn

const StyledModal = styled(Modal)(({ theme }) => ({
   '& .box': {
      width: '29.625rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '& .form': {
         display: 'flex',
         flexFlow: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         gap: '0.5rem',
      },

      '& .heading': {
         textAlign: 'center',
         color: '#000',
         fontFamily: 'Inter',
         fontSize: '1.125rem',
         fontWeight: ' 500',
         textTransform: 'uppercase',
         marginTop: '1.56rem',
         marginBottom: '1.5rem',
      },

      '& .MuiButtonBase-root.MuiButton-root.MuiButtonBase-root': {
         width: '25.875rem',
         padding: '0.625rem 1rem',
         borderRadius: '0.125rem',
         marginTop: '1.25rem',
         marginBottom: '1.56rem',
      },

      '& .validation': {
         color: 'red',
         fontSize: '0.8rem',
      },

      '& .input-container': {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'start',
         gap: '0.3rem',
         height: '55px',
      },

      '& .MuiFormControl-root.MuiTextField-root  ': {
         width: '25.875rem',
         '& .MuiOutlinedInput-root fieldset': {
            padding: '0.625rem 0.5rem 0.625rem 1rem',
            width: '25.875rem',
            borderRadius: '0.125rem',
            border: `1px solid ${theme.palette.tertiary.lightGray}`,
         },
      },
   },
}))
