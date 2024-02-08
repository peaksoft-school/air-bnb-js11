import { FormControlLabel, Radio, RadioGroup, styled } from '@mui/material'

const RadioButton = ({ options, value, onChange }) => (
   <RadioGroup value={value} onChange={onChange}>
      {options.map(({ value, label }) => (
         <FormControlLabel
            key={value}
            value={value}
            control={<StyledRadio />}
            label={label}
         />
      ))}
   </RadioGroup>
)

export default RadioButton

const StyledRadio = styled(Radio)(({ theme }) => ({
   color: '#c4c4c4',

   '&.Mui-checked': {
      color: theme.palette.secondary.main,
   },
}))
