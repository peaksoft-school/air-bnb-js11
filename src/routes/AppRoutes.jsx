import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROLES, routes } from '../utils/constants/routes'
import PrivateRoutes from './PrivateRoutes'
import { adminRoutes } from './AdminRoutes'
import AdminLayout from '../layout/admin/AdminLayout'
import UserLayout from '../layout/user/UserLayout'
import { userRoutes } from './UserRoutes'
import LandingPage from '../containers/LandingPage'

const AppRoutes = () => {
   const router = createBrowserRouter([
      {
         path: routes.ADMIN.index,
         element: (
            <PrivateRoutes
               roles={[ROLES.ADMIN]}
               fallBackPath="/"
               component={<AdminLayout />}
            />
         ),
         children: adminRoutes,
      },
      {
         path: routes.USER.index,
         element: (
            <PrivateRoutes
               roles={[ROLES.USER, ROLES.GUEST]}
               fallBackPath="/admin"
               component={<UserLayout />}
            />
         ),
         children: userRoutes,
      },
      {
         path: '/',
         element: <LandingPage />,
      },
      {
         path: '*',
         element: <Navigate to="/" />,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRoutes
