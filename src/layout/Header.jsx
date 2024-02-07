import { Typography, styled, Button } from '@mui/material'
import { useState } from 'react'
import { LogoIcon } from '../assets/icons'
import headerBackground from '../assets/images/header.png.png'
import Input from '../components/UI/Input'
import JoinUs from '../components/signIn/JoinUs'
import Checkbox from '../components/UI/Checkbox'

const Header = () => {
   const [isOpenJoinUsModal, setIsOpenJoinUsModal] = useState(false)
   const [nearbyChecked, setNearbyChecked] = useState(false)

   const handleChangeJoinUsModal = () => setIsOpenJoinUsModal((prev) => !prev)

   return (
      <StyledContainer>
         <StyledHeader>
            <StyledLogoIcon />
            <StyledRegister>
               <StyledText>leave an ad</StyledText>

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
            <h1>Find a place you&apos;ll love to stay at</h1>
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
   padding: '2.63rem 6.25rem',
}))
const StyledContainer = styled('div')(() => ({
   background: `url(${headerBackground}) center/cover no-repeat`,
   height: '100vh',
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
   marginLeft: '2.625rem',
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
   marginTop: '9.25rem',
   width: '44.5 rem',
   height: '2.625rem',
   color: 'white',
   fontfamily: 'Jenriv Titling',
})
