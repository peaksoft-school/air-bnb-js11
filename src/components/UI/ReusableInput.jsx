import { TextField, styled } from '@mui/material'
import React, { forwardRef } from 'react'

const Input = forwardRef(
   (
      {
         type,
         size,
         label,
         name,
         placeholder,
         onChange,
         onClick,
         value,
         width,
         height,
         error,
         checked,
         defaultChecked,
         ...rest
      },
      ref
   ) => {
      return (
         <StyledInput
            size={size}
            name={name}
            type={type}
            label={label}
            value={value}
            error={error}
            checked={checked}
            onChange={onChange}
            defaultChecked={defaultChecked}
            placeholder={placeholder || 'Введите что-нибудь'}
            ref={ref}
            {...rest}
         />
      )
   }
)

const StyledInput = styled(TextField)(({ text, width, marginBottom }) => ({
   width: width || '40%',
   backgroundColor: '#fff',
   marginBottom: marginBottom || '0px',

   '& .MuiOutlinedInput-input': {
      borderRadius: '2px',
   },
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: text ? '#828282' : 'gray',
      },
      '&:hover fieldset': {
         border: '2px solid gray',
      },
   },
   '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: text ? '#828282' : 'gray',
   },
}))

export default Input
