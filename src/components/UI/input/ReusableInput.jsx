import { TextField, styled } from '@mui/material'
import React, { forwardRef } from 'react'

const Input = forwardRef(
   ({ type, label, placeholder, onChange, onClick, value, ...rest }, ref) => {
      return (
         <StyledInput
            type={type}
            label={label}
            value={value}
            onChange={onChange}
            placeholder={placeholder || 'Введите что-нибудь'}
            ref={ref}
            {...rest}
         />
      )
   }
)

const StyledInput = styled(TextField)(() => ({
   width: '40%',
   backgroundColor: '#fff',
   marginBottom: '0px',

   '& .MuiOutlinedInput-input': {
      borderRadius: '2px',
   },
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: '#828282',
      },
      '&:hover fieldset': {
         border: '2px solid gray',
      },
   },
   '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#828282',
   },
}))

export default Input
