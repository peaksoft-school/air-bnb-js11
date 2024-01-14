import { forwardRef, useState } from 'react'
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select as MuiSelect,
   styled,
} from '@mui/material'
import { DownArrowIcon } from '../../assets'

const Select = forwardRef(
   ({ label, onChange, defaultId, isValueAsId, options, ...rest }, ref) => {
      const findedOption = options.find((option) => option.id === +defaultId)
      const defaultOption = isValueAsId ? findedOption.value : findedOption.id

      const [option, setOption] = useState(defaultOption)

      const handleSelectChange = (e) => {
         setOption(e.target.value)

         if (onChange) onChange(e)
      }

      return (
         <StyledFormControl>
            <StyledInputLabel>
               <span>{label}</span>
            </StyledInputLabel>

            <StyledSelect
               onChange={handleSelectChange}
               value={option}
               ref={ref}
               IconComponent={DownArrowIcon}
               {...rest}
            >
               {options?.map((option) => (
                  <MenuItem
                     key={option.id}
                     value={isValueAsId ? option.value : option.id}
                  >
                     {option.value}
                  </MenuItem>
               ))}
            </StyledSelect>
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

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
   textAlign: 'end',
   color: theme.palette.primary.dark,
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: '400',

   '& .MuiSelect-icon > path': {
      fill: theme.palette.tertiary.middleGray,
   },
}))
