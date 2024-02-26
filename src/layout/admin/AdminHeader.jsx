import { Box, IconButton, styled } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LogoIcon } from '../../assets/icons'
import Meatballs from '../../components/UI/Meatballs'
import { routes } from '../../utils/constants/routes'
import LogOutModal from '../../components/UI/LogOutModal'

const AdminHeader = () => {
   const navigate = useNavigate()
   const [openLogOutModal, setOpenLogOutModal] = useState(false)

   const navigateHandler = () => navigate('/')

   const onLogout = () => {
      setOpenLogOutModal(true)
   }

   const onCloseLogOutModal = () => {
      setOpenLogOutModal(false)
   }

   const option = [{ title: 'Log out', onClick: onLogout }]

   return (
      <>
         <HeaderContainer>
            <div className="links-container">
               <IconButton onClick={navigateHandler}>
                  <LogoIcon />
               </IconButton>
               <ul className="list">
                  <NavLink to={routes.ADMIN.application}>Application</NavLink>
                  <NavLink to={routes.ADMIN.users}>Users</NavLink>
                  <NavLink to={routes.ADMIN.allHousing}>All housing</NavLink>
               </ul>
            </div>
            <div className="meatball-container">
               Administrator
               <Meatballs options={option} variant="arrow" onClick={onLogout} />
            </div>
         </HeaderContainer>
         <LogOutModal open={openLogOutModal} onClose={onCloseLogOutModal} />
      </>
   )
}

export default AdminHeader

const HeaderContainer = styled(Box)(() => ({
   background: '#0b0b0b',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   color: '#fff',
   padding: '14px 40px',

   '& .links-container': {
      display: 'flex',
      alignItems: 'center',
      gap: '83px',

      '& .list': {
         display: 'flex',
         gap: '36px',

         '& > a': {
            color: '#fff',
            textDecoration: 'none',
         },
         '& .active': {
            color: '#ff4b4b',
         },
      },
   },
   '& .meatball-container': {
      display: 'flex',
      alignItems: 'center',
   },
}))
