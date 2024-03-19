import { Box, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { LogoIcon, SearchIcon } from '../../assets/icons'
import Checkbox from '../../components/UI/Checkbox'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import Meatballs from '../../components/UI/Meatballs'
import LogOutModal from '../../components/UI/LogOutModal'

const UserHeader = () => {
   const [openLogOutModal, setOpenLogOutModal] = useState(false)
   const { name } = useSelector((state) => state.user)
   const navigate = useNavigate()

   const onLogout = () => {
      setOpenLogOutModal(true)
   }

   const onCloseLogOutModal = () => {
      setOpenLogOutModal(false)
   }

   const options = [
      {
         title: 'Profile',
         onClick: () => navigate('/user/profile'),
      },
      {
         title: 'Log out',
         onClick: onLogout,
      },
   ]

   const [isChecked, setIsChecked] = useState()
   return (
      <StyledContainer>
         <LogoIcon className="logo-icon" />

         <Checkbox
            className="checkbox"
            label="Search nearby"
            checked={isChecked}
            changeChecked={setIsChecked}
         />

         <Input className="input" placeholder="Search" icon={<SearchIcon />} />
         <Button className="button">SUBMIT AN AD</Button>
         <Typography className="fovorite">FAVORITE(4)</Typography>

         <Box className="user-info">
            <Box className="username">{name && name[0]}</Box>
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

   '& .fovorite': {
      marginLeft: '1.875rem',
      marginRight: '1.875rem',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: ' 400',
      lineHeight: '19px',
      textAlign: ' left',
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
