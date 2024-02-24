import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Suspense, lazy } from 'react'
import { ROLES, routes } from '../utils/constants/routes'
import PrivateRoutes from './PrivateRoutes'
import { adminRoutes } from './AdminRoutes'
import { userRoutes } from './UserRoutes'
import LandingPage from '../containers/LandingPage'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const AdminLayout = lazy(() => import('../layout/admin/AdminLayout'))
const UserLayout = lazy(() => import('../layout/user/UserLayout'))

const AppRoutes = () => {
   const { role, isAuth } = useSelector((state) => state.auth)

   const router = createBrowserRouter([
      {
         path: routes.ADMIN.index,
         element: (
            <PrivateRoutes
               roles={[ROLES.ADMIN]}
               fallBackPath="/"
               component={
                  <Suspense fallback={<LoadingSpinner />}>
                     <AdminLayout />
                  </Suspense>
               }
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
               component={
                  <Suspense fallback={<LoadingSpinner />}>
                     <UserLayout />
                  </Suspense>
               }
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
