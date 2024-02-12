import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ROLES, routes } from '../utils/constants/routes'
import PrivateRoutes from './PrivateRoutes'
import { adminRoutes } from './AdminRoutes'
import AdminLayout from '../layout/admin/AdminLayout'
import UserLayout from '../layout/user/UserLayout'
import { userRoutes } from './UserRoutes'
import LandingPage from '../containers/LandingPage'

const AppRoutes = () => {
   const { role, isAuth } = useSelector((state) => state.auth)

   const router = createBrowserRouter([
      {
         path: routes.ADMIN.index,
         element: (
            <PrivateRoutes
               roles={[ROLES.ADMIN]}
               fallBackPath="/"
               component={<AdminLayout />}
               role={role}
               isAuth={isAuth}
            />
         ),
         children: adminRoutes,
      },
      {
         path: routes.USER.index,
         element: (
            <PrivateRoutes
               roles={[ROLES.USER]}
               fallBackPath="/admin"
               component={<UserLayout />}
               role={role}
               isAuth={isAuth}
            />
         ),
         children: userRoutes,
      },
      {
         path: '/',
         element: role === 'ADMIN' ? <Navigate to="/admin" /> : <LandingPage />,
      },
      {
         path: '*',
         element: <Navigate to="/" />,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRoutes
