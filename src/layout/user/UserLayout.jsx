import { Outlet } from 'react-router'
import LandingPage from '../../containers/LandingPage'

const UserLayout = () => {
   return (
      <div>
         <LandingPage />
         <Outlet />
      </div>
   )
}

export default UserLayout
