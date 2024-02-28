import { Box, Typography, styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import { schema } from '../../utils/helpers/validate'
import { signInRequest } from '../../store/slice/auth/authThunk'
import LoadingBtn from '../UI/LoadingBtn'

const SignIn = ({ isOpenModal, onClose }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [visiblePassword, setVisiblePassword] = useState(false)
   const [disabledBtn, setDisabledBtn] = useState(false)

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: yupResolver(schema),
   })

   const onSubmit = (data) => {
      dispatch(
         signInRequest({ data, navigate, onClose, reset, setDisabledBtn })
      )
   }

   const handleChangeVisibility = () => setVisiblePassword((prev) => !prev)

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
                     type={visiblePassword ? 'text' : 'password'}
                     placeholder="Password"
                     {...register('password')}
                  />
                  {visiblePassword ? (
                     <VisibilityIcon onClick={handleChangeVisibility} />
                  ) : (
                     <VisibilityOffIcon onClick={handleChangeVisibility} />
                  )}
                  <Typography className="validation">
                     {errors.password ? `${errors.password.message}` : ''}
                  </Typography>
               </Box>

               <Button type="submit" disabled={disabledBtn}>
                  {disabledBtn ? <LoadingBtn /> : 'SIGN IN'}
               </Button>
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
         position: 'relative',

         '& .MuiSvgIcon-root': {
            position: 'absolute',
            top: '5px',
            right: '1rem',
            cursor: 'pointer',

            path: {
               fill: theme.palette.tertiary.middleGray,
            },
         },
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
