import {
   FormControlLabel,
   Checkbox as MuiCheckbox,
   styled,
} from '@mui/material'

const Checkbox = ({ label = '', checked = false, changeChecked }) => {
   const changeHandler = (e) => changeChecked(e.target.checked)

   return (
      <FormControlLabel
         control={<StyledCheckbox />}
         label={label}
         checked={checked}
         onChange={changeHandler}
      />
   )
}

export default Checkbox

const StyledCheckbox = styled(MuiCheckbox)(({ theme }) => ({
   color: '#c4c4c4',
   '&.Mui-checked': {
      color: theme.palette.secondary.main,
   },
}))
