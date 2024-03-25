import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Container, Typography, keyframes, styled } from '@mui/material'
import {
   InstagramIcon,
   LogoIcon,
   TelegramIcon,
   WhatsAppIcon,
} from '../../assets/icons'
import GuestNotification from '../../components/UI/GuestNotification'
import { ROLES, routes } from '../../utils/constants/routes'

const Footer = () => {
   const [isOpenGuestModal, setIsOpenGuestModal] = useState(false)
   const { role } = useSelector((state) => state.auth)
   const navigate = useNavigate()

   const handleToggleModal = () => {
      if (role === ROLES.GUEST) {
         setIsOpenGuestModal((prev) => !prev)
      } else if (role === ROLES.USER) {
         navigate(routes.USER.addHouse)
      }
   }

   return (
      <StyleContainer>
         <Container>
            <Box className="box" py={1.25}>
               <StyleStackContainer>
                  <StyleStackHover>
                     <a href="#region" className="region">
                        Regions
                     </a>
                     <StyleTypography onClick={handleToggleModal}>
                        leave an ad
                     </StyleTypography>
                  </StyleStackHover>
                  <LogoIcon className="logo" />
                  <StyleStacSocial>
                     <InstagramIcon className="icons instagram" />
                     <TelegramIcon className="icons telegram" />
                     <WhatsAppIcon className="icons watsapp" />
                  </StyleStacSocial>
               </StyleStackContainer>
               <StyleTypographyPeaksoft>
                  © Copyright PeakSoft. All Rights Reserved
               </StyleTypographyPeaksoft>
            </Box>
            <GuestNotification
               open={isOpenGuestModal}
               onClose={handleToggleModal}
            />
         </Container>
      </StyleContainer>
   )
}

export default Footer

const StyleStackHover = styled(Box)(() => ({
   display: 'flex',
   cursor: 'pointer',
   gap: '2.4rem',

   '& .region': {
      fontFamily: 'Inter',
      fontSize: '1.125rem',
      fontWeight: '400',
      lineHeight: '1.361rem',
      color: '#ffffff',
      textDecoration: 'none',
   },
}))

const StyleStackContainer = styled(Box)(() => ({
   width: '100%',
   display: 'flex',
   gap: '1rem',
   padding: '3.75rem 0',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const StyleContainer = styled(Box)(({ theme }) => ({
   background: theme.palette.secondary.blackGreen,
   color: theme.palette.primary.main,
   fontFamily: 'Inter',
   display: 'flex',
   justifyContent: 'center',

   '& .logo': {
      width: '85px',
      height: '60px',
   },

   '& .MuiContainer-root': {
      padding: '0px 0px',
      margin: '0px 0px',
      minWidth: '77.5rem',
   },
}))

const slideInTop = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const StyleStacSocial = styled(Box)(() => ({
   display: 'flex',
   gap: '1rem',

   '& .icons': {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      transitionDuration: '.3s',
   },

   'svg:hover': {
      path: {
         animation: `${slideInTop} 0.3s both`,
      },
   },

   'svg:active': {
      transform: 'scale(0.9)',
      transitionDuration: '.3s',
   },

   '& .instagram:hover': {
      backgroundColor: '#d62976',
      transitionDuration: '.3s',
   },

   '& .telegram:hover': {
      backgroundColor: '#0072b1',
      transitionDuration: '.3s',
   },

   '& .watsapp:hover': {
      backgroundColor: '#128C7E',
      transitionDuration: '.3s',
   },
}))

const StyleTypography = styled(Typography)(({ theme }) => ({
   color: theme.palette.secondary.lightBrown,
   fontFamily: 'Inter',
}))

const StyleTypographyPeaksoft = styled(Typography)(() => ({
   color: '#859589',
   fontFamily: 'Inter',
   textAlign: 'center',
   marginLeft: '2.2rem',
}))
