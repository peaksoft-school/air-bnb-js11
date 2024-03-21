import { Box, styled } from '@mui/material'
import { Outlet } from 'react-router'
import UserHeader from './UserHeader'
import Footer from '../footer/Footer'

const UserLayout = () => {
   return (
      <StyledUserLayout>
         <UserHeader />
         <Outlet />
         <Footer />
      </StyledUserLayout>
   )
}

export default UserLayout

const StyledUserLayout = styled(Box)(() => ({
   backgroundColor: '#f7f7f7',
   width: '100%',
   minHeight: '100vh',
}))
