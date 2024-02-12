import { Typography, styled, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { LogoIcon } from '../assets/icons'
import headerBackground from '../assets/images/header.jpg'
import Input from '../components/UI/Input'
import JoinUs from '../components/signIn/JoinUs'
import Checkbox from '../components/UI/Checkbox'
import GuestNotification from '../components/UI/GuestNotification'

const Header = () => {
   const [isOpenJoinUsModal, setIsOpenJoinUsModal] = useState(false)
   const [nearbyChecked, setNearbyChecked] = useState(false)
   const [isOpenGuestModal, setIsOpenGuestModal] = useState(false)
   const { role } = useSelector((state) => state.auth)

   const handleChangeJoinUsModal = () => setIsOpenJoinUsModal((prev) => !prev)

   const handleToggleModal = () => {
      if (role === 'GUEST') {
         setIsOpenGuestModal((prev) => !prev)
      }
   }

   return (
      <StyledContainer>
         <StyledHeader>
            <StyledLogoIcon />
            <StyledRegister>
               <StyledText onClick={handleToggleModal}>leave an ad</StyledText>
               <GuestNotification
                  open={isOpenGuestModal}
                  onClose={handleToggleModal}
               />
               <StyledButton variant="button" onClick={handleChangeJoinUsModal}>
                  Join us
               </StyledButton>
               <JoinUs
                  isOpenModal={isOpenJoinUsModal}
                  onClose={handleChangeJoinUsModal}
               />
            </StyledRegister>
         </StyledHeader>
         <StyledContentWrapper>
            <h1 className="header">Find a place you&apos;ll love to stay at</h1>
            <Input />

            <StyledSearch>
               <Checkbox
                  label="Искать поблизости"
                  changeChecked={setNearbyChecked}
                  checked={nearbyChecked}
               />
            </StyledSearch>
         </StyledContentWrapper>
      </StyledContainer>
   )
}
export default Header

const StyledHeader = styled('header')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   width: '90rem',
   padding: '2.63rem 6.25rem',
   marginLeft: '3rem',
}))

const StyledContainer = styled('div')(() => ({
   position: 'relative',
   width: '100%',
   height: '46.1rem',
   overflow: 'hidden',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   background: `url(${headerBackground}) center/cover no-repeat`,
}))
const StyledVideo = styled('video')(() => ({
   position: 'absolute',
   top: 0,
   left: 0,
   width: '100%',
   height: '100%',
   objectFit: 'cover',
   zIndex: -1,
}))

const StyledRegister = styled('div')(() => ({
   display: 'flex',
   gap: '3.75rem',
   textAlign: 'center',
}))

const StyledText = styled(Typography)(({ theme }) => ({
   color: theme.palette.primary.main,
   textAlign: 'center',
   marginTop: '0.5rem',
   cursor: 'pointer',
}))

const StyledButton = styled(Button)({
   color: '#F7F7F7',
   fontFamily: 'Inter',
   fontSize: '0.875rem',
   lineHeight: 'normal',
   background: '#DD8A08',
   width: '12.25rem',
   height: '2.31rem',
   '&:hover': {
      background: '#BB7200',
   },
})

const StyledLogoIcon = styled(LogoIcon)({
   width: '5.5rem',
   height: '4.06rem',
})

const StyledSearch = styled('div')({
   alignItems: 'center',
   display: 'flex',
   marginLeft: '34rem',
   marginTop: '-2.20rem',
})

const StyledContentWrapper = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '3.12rem',
   width: '100%',
   height: '36.8rem',
   color: 'white',

   '& .header': {
      fontFamily: 'Jenriv Titling',
      fontSize: '2.5rem',
      fontWeight: '400',
      textTransform: 'uppercase',
   },
})
