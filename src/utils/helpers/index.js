import { styled } from '@mui/material'
import { toast } from 'react-toastify'

export const showToast = ({ heading, message, type, duration = 3000 }) => {
   toast[type](
      <>
         <StyledHeading>{heading}</StyledHeading>
         <StyledMessage>{message}</StyledMessage>
      </>,
      {
         position: toast.POSITION.TOP_RIGHT,
         autoClose: duration,
         closeOnClick: true,
         style: {
            background: type === 'success' ? '#F0FFF1' : '#FFF1F0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '10px',
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

const StyledMessage = styled('p')(({ theme }) => ({
   marginTop: '0.38rem',
   width: '100%',
   wordWrap: 'break-word',
   color: theme.palette.tertiary.main,
   fontFamily: 'Inter',
   fontSize: '0.875rem',
   fontWeight: 400,
}))
