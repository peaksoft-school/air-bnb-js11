import { Navigate } from 'react-router'
import AllHousing from '../containers/admin/AllHousing'
import Application from '../containers/admin/Application'
import UsersPage from '../containers/admin/user-page/UsersPage'
import UserPage from '../containers/admin/user-page/UserPage'
import { routes } from '../utils/constants/routes'
import InnerApplication from '../components/InnerApplication'

export const adminRoutes = [
   {
      path: routes.ADMIN.index,
      element: <Navigate to={routes.ADMIN.application} />,
   },
   {
      path: routes.ADMIN.applicationById,
      element: <InnerApplication />,
   },
   {
      path: routes.ADMIN.application,
      element: <Application />,
   },
   {
      path: routes.ADMIN.users,
      element: <UsersPage />,
   },
   {
      path: routes.ADMIN.user,
      element: <UserPage />,
   },
   { path: routes.ADMIN.allHousing, element: <AllHousing /> },
]
