import { Box, styled } from '@mui/material'
import { Outlet } from 'react-router'

const UserLayout = () => {
   return (
      <StyledUserLayout>
         <Outlet />
      </StyledUserLayout>
   )
}

export default UserLayout

const StyledUserLayout = styled(Box)(() => ({
   backgroundColor: '#f7f7f7',
   width: '100%',
   minHeight: '100vh',
}))
