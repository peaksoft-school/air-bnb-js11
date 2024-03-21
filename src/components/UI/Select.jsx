import { forwardRef, useState } from 'react'
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select as MuiSelect,
   Rating,
   styled,
} from '@mui/material'
import { DownArrowIcon } from '../../assets/icons'

const Select = forwardRef(
   (
      { label, onChange, defaultId, isValueAsId, options, isRating, ...rest },
      ref
   ) => {
      const findedOption = options.find((option) => option.id === +defaultId)

      const [option, setOption] = useState(findedOption)

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
               <MenuItem value="" selected>
                  All
               </MenuItem>
               {options?.map((option) => (
                  <MenuItem
                     key={option.id}
                     value={isValueAsId ? option.value : option.id}
                  >
                     {isRating ? (
                        <Rating value={option.value} readOnly />
                     ) : (
                        option.label
                     )}
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
   height: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   borderRadius: '6px',

   '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid gray',
   },

   '&:hover': {
      backgroundColor: theme.palette.tertiary.lightestGray,
   },
}))

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
   width: '85%',
   height: '100%',
   alignItems: 'center',
   display: 'flex',
   transform: 'none',
   justifyContent: 'space-between',
   marginLeft: '0.75rem',
   zIndex: 0,

   '&.MuiInputLabel-shrink': {
      color: theme.palette.tertiary.middleGray,
   },
}))

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
   textAlign: 'end',
   color: theme.palette.primary.dark,
   fontSize: '1rem',
   fontWeight: '400',

   '& .MuiSelect-icon > path': {
      fill: theme.palette.primary.dark,
      stroke: theme.palette.primary.dark,
   },
}))
