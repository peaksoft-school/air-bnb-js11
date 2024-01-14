import { styled } from '@mui/material'
import { toast } from 'react-toastify'
import { CloseIcon } from '../../assets'

export const showToast = ({ title, message, type, duration = 3000 }) => {
   toast[type](
      <>
         <StyledHeading>{title}</StyledHeading>
         <StyledMessage>{message}</StyledMessage>
      </>,
      {
         position: toast.POSITION.TOP_RIGHT,
         autoClose: duration,
         closeOnClick: true,
         closeButton: <StyledCloseIcon />,
         style: {
            background: type === 'success' ? '#F0FFF1' : '#FFF1F0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '10px',
            paddingTop: '1.75rem',
            paddingBottom: '1.75rem',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
         },
      }
   )
}

const StyledHeading = styled('h1')(({ theme }) => ({
   color: theme.palette.primary.dark,
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: 500,
}))

const StyledCloseIcon = styled(CloseIcon)(() => ({
   width: '1.5rem',
   height: '1.5rem',
   position: 'absolute',
   right: '0.75rem',
   top: '0.75rem',

   '& > path': {
      fill: '#828282',
   },

   '& > path:hover': {
      fill: 'black',
   },
}))

const StyledMessage = styled('p')(({ theme }) => ({
   marginTop: '0.38rem',
   width: '100%',
   wordWrap: 'break-word',
   color: theme.palette.tertiary.main,
   fontFamily: 'Inter',
   fontSize: '0.875rem',
   fontWeight: 400,
}))
