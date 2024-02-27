import InnerApplication from '../components/InnerApplication'
import { routes } from '../utils/constants/routes'
import Application from '../components/admin/Application'
import { routes } from '../utils/constants/routes'

export const adminRoutes = [
   {
      path: routes.ADMIN.applicationById,
      element: <InnerApplication />,
   },
   { path: routes.ADMIN.application, element: <Application /> },
]
