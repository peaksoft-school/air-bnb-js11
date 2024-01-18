import { forwardRef } from 'react'
import { TextField, styled } from '@mui/material'

const Input = forwardRef(
   ({ type, label, placeholder, onChange, onClick, value, ...rest }, ref) => (
      <StyledInput
         type={type}
         label={label}
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         ref={ref}
         {...rest}
      />
   )
)

const StyledInput = styled(TextField)(() => ({
   width: '725px',
   backgroundColor: '#fff',
   marginBottom: '0px',
   borderRadius: '2px',

   '& .MuiOutlinedInput-input': {
      borderRadius: '2px',
      height: '2.625px',
   },

   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: '#828282',
         borderRadius: '2px',
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
