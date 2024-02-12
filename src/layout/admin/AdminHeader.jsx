import { Box, IconButton, styled } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LogoIcon } from '../../assets/icons'
import Meatballs from '../../components/UI/Meatballs'
import { showToast } from '../../utils/helpers/toast'
import { logout } from '../../store/slice/auth/authSlice'
import { routes } from '../../utils/constants/routes'

const option = [{ title: 'Log out', key: '1' }]

const AdminHeader = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const navigateHandler = () => navigate('/')
   const onLogout = (key) => {
      if (key === '1') {
         dispatch(logout())
         showToast({
            title: 'Success',
            message: 'Successfully have log get out',
            type: 'success',
         })
      } else {
         showToast({
            title: 'Error',
            message: 'Something went wrong',
            type: 'error',
         })
      }
   }

   return (
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
