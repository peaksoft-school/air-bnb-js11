import { forwardRef, useState } from 'react'
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select as MuiSelect,
   styled,
} from '@mui/material'

const Select = forwardRef(
   ({ label, onChange, defaultValue, isValueAsId, options, ...rest }, ref) => {
      const [value, setValue] = useState(defaultValue || '')

      const handleSelectChange = (e) => {
         setValue(e.target.value)
         if (onChange) {
            onChange(e)
         }
      }

      return (
         <StyledFormControl>
            <StyledInputLabel>
               <span>{label}</span>
            </StyledInputLabel>
            <StyledMuiSelect
               onChange={handleSelectChange}
               value={value}
               ref={ref}
               {...rest}
            >
               {options?.map((option) => (
                  <MenuItem
                     key={option.id}
                     value={isValueAsId ? option.value : option.id}
                  >
                     {option.name}
                  </MenuItem>
               ))}
            </StyledMuiSelect>
         </StyledFormControl>
      )
   }
)

export default Select

const StyledFormControl = styled(FormControl)(({ theme }) => ({
   width: '18rem',
   height: '3.5625rem',
   justifyContent: 'space-between',
   '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid gray',
   },
   '&:hover': {
      backgroundColor: theme.palette.tertiary.lightestGray,
   },
}))

const StyledInputLabel = styled(InputLabel)(() => ({
   width: '85%',
   height: '100%',
   alignItems: 'center',
   display: 'flex',
   transform: 'none',
   justifyContent: 'space-between',
   marginLeft: '0.75rem',
   '&.MuiInputLabel-shrink': {
      color: 'grey',
   },
}))

const StyledMuiSelect = styled(MuiSelect)(({ theme }) => ({
   textAlign: 'end',
   color: theme.palette.primary.dark,
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: 400,
   // '& .MuiPopover-paper-MuiMenu-paper': {
   //    boxShadow: 'none',
   // },
}))
