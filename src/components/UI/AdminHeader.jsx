import { Box, IconButton, styled } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { LogoIcon } from '../../assets/icons'
import Meatballs from './Meatballs'

const option = [{ title: 'Log out', key: '1' }]

const AdminHeader = () => {
   const navigate = useNavigate()

   const navigateHandler = () => {
      navigate('/')
   }
   const onLogout = (key) => {
      if (key === '1') {
         // здесь будет функция выхода
      }
      return console.error('Something went wrong')
   }

   return (
      <HeaderContainer>
         <div className="links-container">
            <IconButton onClick={navigateHandler}>
               <LogoIcon />
            </IconButton>
            <ul className="list">
               <NavLink to="application">Application</NavLink>
               <NavLink to="users">Users</NavLink>
               <NavLink to="all-housing">All housing</NavLink>
            </ul>
         </div>
         <div className="meatball-container">
            Administrator
            <Meatballs options={option} variant="arrow" onClick={onLogout} />
         </div>
      </HeaderContainer>
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
