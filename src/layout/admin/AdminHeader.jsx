import { useState } from 'react'
import { Box, IconButton, styled } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import Meatballs from '../../components/UI/Meatballs'
import LogOutModal from '../../components/UI/LogOutModal'
import { routes } from '../../utils/constants/routes'
import { LogoIcon } from '../../assets/icons'

const AdminHeader = () => {
   const [toggleLogOut, setToggleLogOut] = useState(false)

   const navigate = useNavigate()

   const navigateHandler = () => navigate('/')

   const toggleLogOutHandler = () => setToggleLogOut((prev) => !prev)

   const option = [{ title: 'Log out', onClick: toggleLogOutHandler }]

   return (
      <>
         <StyledContainer>
            <Box className="navigations-box">
               <IconButton onClick={navigateHandler}>
                  <LogoIcon />
               </IconButton>

               <nav>
                  <NavLink to={routes.ADMIN.application}>Application</NavLink>
                  <NavLink to={routes.ADMIN.users}>Users</NavLink>
                  <NavLink to={routes.ADMIN.allHousing}>All housing</NavLink>
               </nav>
            </Box>

            <Box className="log-out">
               Administrator
               <Meatballs
                  options={option}
                  variant="arrow"
                  onClick={toggleLogOutHandler}
               />
            </Box>
         </StyledContainer>

         <LogOutModal open={toggleLogOut} onClose={toggleLogOutHandler} />
      </>
   )
}

export default AdminHeader

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   color: '#fff',
   background: '#0b0b0b',
   padding: '14px 40px',

   '& > .navigations-box': {
      display: 'flex',
      alignItems: 'center',
      gap: '83px',

      '& > nav': {
         display: 'flex',
         gap: '36px',

         '& > a': {
            color: '#fff',
            textDecoration: 'none',
         },

         '& > .active': {
            color: '#ff4b4b',
         },
      },
   },

   '& > .log-out': {
      display: 'flex',
      alignItems: 'center',
   },
}))
