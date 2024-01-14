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

const StyledInput = styled(TextField)(({ theme }) => ({
   width: '100%',
   backgroundColor: theme.palette.primary.main,
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
