import { Avatar, Box, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { LogoIcon, SearchIcon } from '../../assets/icons'
import Checkbox from '../../components/UI/Checkbox'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import Meatballs from '../../components/UI/Meatballs'
import LogOutModal from '../../components/UI/LogOutModal'
import { routes } from '../../utils/constants/routes'
import useDebounce from '../../hooks/useDebounce'
import { globalSearchAsync } from '../../store/slice/user/house/houseThunk'
import { HOUSE_ACTIONS } from '../../store/slice/user/house/houseSlice'

const UserHeader = () => {
   const [openLogOutModal, setOpenLogOutModal] = useState(false)
   const { image } = useSelector((state) => state.user)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const [searchInput, setSearchInput] = useState('')
   const debouncedInput = useDebounce(searchInput, 1000)
   const [nearbyChecked, setNearbyChecked] = useState(false)

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

   const onLogout = () => {
      setOpenLogOutModal(true)
   }

   const onCloseLogOutModal = () => {
      setOpenLogOutModal(false)
   }

   const navigateToAddHouse = () => {
      navigate(routes.USER.addHouse)
   }

   const navigateToFavorites = () => navigate(routes.USER.favorite)

   const handleChangeSearch = (e) => {
      setSearchInput(e.target.value)
   }

   const options = [
      {
         title: 'Profile',
         onClick: () => navigate(routes.USER.profile),
      },
      {
         title: 'Log out',
         onClick: onLogout,
      },
   ]

   return (
      <StyledContainer>
         <LogoIcon className="logo-icon" onClick={() => navigate('/')} />

         <Checkbox
            className="checkbox"
            label="Search nearby"
            checked={nearbyChecked}
            changeChecked={setNearbyChecked}
         />

         <Input
            className="input"
            placeholder="Search"
            icon={<SearchIcon />}
            onChange={handleChangeSearch}
            value={searchInput}
         />
         <Button className="button" onClick={navigateToAddHouse}>
            SUBMIT AN AD
         </Button>
         <Typography className="favorite" onClick={navigateToFavorites}>
            FAVORITE
         </Typography>

         <Box className="user-info">
            <Avatar
               src={image}
               className="username"
               onClick={() => navigate(routes.USER.profile)}
            />
            <Meatballs variant="arrow" options={options} />
         </Box>

         <LogOutModal open={openLogOutModal} onClose={onCloseLogOutModal} />
      </StyledContainer>
   )
}

export default UserHeader

const StyledContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   position: 'sticky',
   top: '0',
   zIndex: '1000',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '0rem 6.25rem',
   width: '100%',
   height: '5.5rem',

   backgroundColor: theme.palette.primary.main,

   '& .logo-icon': {
      marginRight: '8.625rem',
      width: '4.625rem',
      height: '3.438rem',
      cursor: 'pointer',

      '& path': {
         fill: theme.palette.secondary.blackGreen,
      },
   },

   '& .button': {
      width: '12.25rem',
   },

   '& .input': {
      width: '25.875rem',
      marginRight: '1.875rem',

      '& .MuiInputBase-root.MuiOutlinedInput-root': {
         height: '2.5rem',
      },

      '& .MuiOutlinedInput-root': {
         '& fieldset': {
            borderColor: theme.palette.tertiary.lightGray,
            borderRadius: '2px',
         },

         '&:hover fieldset': {
            border: `2px solid ${theme.palette.tertiary.lightGray}`,
         },
      },

      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
         borderColor: theme.palette.tertiary.lightGray,
      },
   },

   '& .checkbox': {
      color: '#525252',
      marginRight: '1.875rem',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: ' 400',
      lineHeight: '19px',
      textAlign: ' left',

      '& .MuiButtonBase-root.MuiCheckbox-root': {
         borderColor: theme.palette.tertiary.lightGray,
      },
   },

   '& .favorite': {
      marginLeft: '1.875rem',
      marginRight: '1.875rem',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: ' 400',
      lineHeight: '19px',
      textAlign: ' left',
      cursor: 'pointer',
   },

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
