import { Outlet } from 'react-router'
import UserHeader from './UserHeader'
import Footer from '../footer/Footer'

const UserLayout = () => {
   return (
      <>
         <UserHeader />
         <Outlet />
         <Footer />
      </>
   )
}

export default UserLayout
