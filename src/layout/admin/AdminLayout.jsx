import { Outlet } from 'react-router'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
   return (
      <div>
         <AdminHeader />
         <Outlet />
      </div>
   )
}

export default AdminLayout
