import { FormControlLabel, Radio, RadioGroup, styled } from '@mui/material'

const RadioButton = ({ options, value, onChange, ...rest }) => (
   <RadioGroup value={value} onChange={onChange} {...rest}>
      {options.map(({ value, label }) => (
         <StyledFormControlLabel
            key={value}
            value={value}
            control={<StyledRadio />}
            label={label}
            labelPlacement="end"
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

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
   marginRight: '2.5rem',
}))
