import { Button as MUIButton, styled } from '@mui/material'

const Button = (props) => <StyledButton {...props} />

const StyledButton = styled(MUIButton)(({ theme }) => ({
   border: `1px solid ${theme.palette.secondary.main}`,
   borderRadius: '2px',
   background: 'white',
   fontFamily: 'Inter, sans-serif',
   textTransform: 'uppercase',
   color: `${theme.palette.secondary.main}`,
   transition: theme.transitions.create(
      ['background-color', 'border-color', 'color'],
      {
         duration: theme.transitions.duration.short,
      }
   ),
   cursor: 'pointer',
   '&:hover': {
      background: `${theme.palette.secondary.main}`,
      borderColor: `${theme.palette.secondary.main}`,
      color: `${theme.palette.primary.white}`,
   },
   '&:active': {
      background: `${theme.palette.secondary.lightBrown}`,
      color: `${theme.palette.primary.white}`,
   },
   '&:disabled': {
      background: `${theme.palette.tertiary.lightGray}`,
      cursor: 'not-allowed',
   },
}))

export default Button
