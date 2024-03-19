import { Outlet } from 'react-router'
import { Box, styled } from '@mui/material'
import AdminHeader from './AdminHeader'

const AdminLayout = () => (
   <StyledContainer>
      <AdminHeader />

      <Outlet />
   </StyledContainer>
)

export default AdminLayout

const StyledContainer = styled(Box)(() => ({
   backgroundColor: '#f7f7f7',
   width: '100%',
   minHeight: '100vh',
}))
