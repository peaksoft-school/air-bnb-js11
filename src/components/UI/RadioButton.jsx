import { FormControlLabel, Radio, RadioGroup, styled } from '@mui/material'

const RadioButton = ({ options, value, onChange }) => {
   return (
      <RadioGroup value={value} onChange={onChange}>
         {options.map((option) => (
            <FormControlLabel
               key={option.value}
               value={option.value}
               control={<StyledRadio />}
               label={option.label}
            />
         ))}
      </RadioGroup>
   )
}

export default RadioButton

const StyledRadio = styled(Radio)(({ theme }) => ({
   color: '#c4c4c4',

   '&.Mui-checked': {
      color: theme.palette.secondary.main,
   },
}))
