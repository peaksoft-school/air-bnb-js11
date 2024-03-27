/* eslint-disable no-unused-vars */
import {
   Typography,
   styled,
   Button,
   InputAdornment,
   Box,
   Avatar,
   Autocomplete,
   Stack,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { LogoIcon, SearchIcon } from '../assets/icons'
import headerBackground from '../assets/images/header.jpg'
import Input from '../components/UI/Input'
import JoinUs from '../components/signIn/JoinUs'
import Checkbox from '../components/UI/Checkbox'
import GuestNotification from '../components/UI/GuestNotification'
import Meatballs from '../components/UI/Meatballs'
import LogOutModal from '../components/UI/LogOutModal'
import { ROLES, routes } from '../utils/constants/routes'
import { axiosInstance } from '../configs/axiosInstance'
import { TalasImage } from '../assets/images'
import { globalSearchAsync } from '../store/slice/user/house/houseThunk'
import { HOUSE_ACTIONS } from '../store/slice/user/house/houseSlice'
import useDebounce from '../hooks/useDebounce'

const Header = () => {
   const { role, isAuth } = useSelector((state) => state.auth)
   const { image } = useSelector((state) => state.user)
   const { houses } = useSelector((state) => state.houses)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const [isOpenJoinUsModal, setIsOpenJoinUsModal] = useState(false)
   const [nearbyChecked, setNearbyChecked] = useState(false)
   const [isOpenGuestModal, setIsOpenGuestModal] = useState(false)
   const [openLogOutModal, setOpenLogOutModal] = useState(false)
   const [searchInput, setSearchInput] = useState('')
   const debouncedInput = useDebounce(searchInput, 500)

   const handleChangeJoinUsModal = () => setIsOpenJoinUsModal((prev) => !prev)

   const handleToggleModal = () => {
      if (role === ROLES.GUEST) {
         setIsOpenGuestModal((prev) => !prev)
      } else if (role === ROLES.USER) {
         navigate(routes.USER.addHouse)
      }
   }

   const onLogout = () => {
      setOpenLogOutModal(true)
   }

   const onCloseLogOutModal = () => {
      setOpenLogOutModal(false)
   }

   const goToProfile = () => navigate('/user/profile')

   const handleChangeSearch = (e) => {
      setSearchInput(e.target.value)
   }

   useEffect(() => {
      if (searchInput.length > 0) {
         dispatch(
            globalSearchAsync({
               searchInput: debouncedInput,
               isNearby: nearbyChecked,
            })
         )
      } else {
         dispatch(HOUSE_ACTIONS.clearHouse())
      }
   }, [debouncedInput])

   const options = [
      {
         title: 'Profile',
         onClick: goToProfile,
      },
      {
         title: 'Log out',
         onClick: onLogout,
      },
   ]

   return (
      <>
         <StyledContainer>
            <StyledHeader>
               <StyledLogoIcon />
               <StyledRegister>
                  <StyledText onClick={handleToggleModal}>
                     leave an ad
                  </StyledText>
                  <GuestNotification
                     open={isOpenGuestModal}
                     onClose={handleToggleModal}
                  />
                  {isAuth ? (
                     <Box className="user-info">
                        <Avatar
                           src={image}
                           className="username"
                           onClick={() => navigate(routes.USER.profile)}
                        />
                        <Meatballs variant="arrow" options={options} />
                     </Box>
                  ) : (
                     <StyledButton
                        variant="button"
                        onClick={handleChangeJoinUsModal}
                     >
                        Join us
                     </StyledButton>
                  )}
                  <JoinUs
                     isOpenModal={isOpenJoinUsModal}
                     onClose={handleChangeJoinUsModal}
                  />
               </StyledRegister>
            </StyledHeader>
            <StyledContentWrapper>
               <h1 className="header">
                  Find a place you&apos;ll love to stay at
               </h1>
               <Input
                  onChange={handleChangeSearch}
                  value={searchInput}
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <SearchIcon />
                        </InputAdornment>
                     ),
                  }}
               />
               {houses && houses.length > 0 ? (
                  <Houses>
                     {houses.map((house) => (
                        <Box className="house-list" key={house.id}>
                           <img
                              src={house?.images?.map((img) => img)}
                              alt="houseName"
                           />
                           <Box>
                              <Typography className="title">
                                 {house.title}
                              </Typography>
                              <Typography className="description">
                                 {house.description}
                              </Typography>
                              <Typography>
                                 {house.province}, {house.address}
                              </Typography>
                           </Box>
                        </Box>
                     ))}
                  </Houses>
               ) : null}
               <StyledSearch>
                  <Checkbox
                     label="Искать поблизости"
                     changeChecked={setNearbyChecked}
                     checked={nearbyChecked}
                  />
               </StyledSearch>
            </StyledContentWrapper>
         </StyledContainer>
         <LogOutModal open={openLogOutModal} onClose={onCloseLogOutModal} />
      </>
   )
}
export default Header

const StyledHeader = styled('header')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   maxWidth: '90rem',
   minWidth: '65rem',
   padding: '2.63rem 6.25rem',
   marginLeft: '3rem',
}))

const StyledContainer = styled(Box)(() => ({
   position: 'relative',
   width: '100%',
   height: '46.1rem',
   overflow: 'hidden',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   background: `url(${headerBackground}) center/cover no-repeat`,
}))

const StyledRegister = styled(Box)(() => ({
   display: 'flex',
   gap: '3.75rem',
   textAlign: 'center',

   '& .user-info': {
      display: 'flex',
      alignItems: 'flex-start',

      '& .username': {
         background: '#0298d9',
         width: '2.3125rem',
         height: '2.3125rem',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius: '50%',
         color: '#fff',
         cursor: 'pointer',
      },
   },
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

const StyledSearch = styled(Box)({
   alignItems: 'center',
   display: 'flex',
   marginLeft: '34rem',
   marginTop: '-2.20rem',
})

const StyledContentWrapper = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '3.12rem',
   width: '100%',
   height: '36.8rem',
   color: 'white',
   position: 'relative',

   '& .header': {
      fontFamily: 'Jenriv Titling',
      fontSize: '2.5rem',
      fontWeight: '400',
      textTransform: 'uppercase',
   },
})

const Houses = styled(Box)(() => ({
   backgroundColor: '#fff',
   position: 'absolute',
   top: '25%',
   width: '60%',
   zIndex: 10,
   color: '#222',
   padding: '10px',
   maxHeight: '400px',
   overflow: 'hidden',
   overflowY: 'auto',

   '& .house-list': {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      cursor: 'pointer',

      '& .title': {
         fontWeight: 600,
      },

      ':hover': {
         background: '#c1c1c1',
      },
      padding: '10px',

      ':not(:last-child)': {
         borderBottom: '1px solid #646464',
      },

      '& img': {
         width: '100px',
         objectFit: 'cover',
         borderRadius: '10px',
         height: '80px',
      },
   },
}))
