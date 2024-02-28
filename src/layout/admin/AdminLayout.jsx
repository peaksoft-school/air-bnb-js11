import { Outlet } from 'react-router'
import { Box, styled } from '@mui/material'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
   return (
      <StyledAdminLayout>
         <AdminHeader />
         <Outlet />
      </StyledAdminLayout>
   )
}

export default AdminLayout

const StyledAdminLayout = styled(Box)(() => ({
   backgroundColor: '#f7f7f7',
   width: '100%',
   height: '100vh',
}))
