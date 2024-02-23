import InnerApplication from '../components/InnerApplication'
import { routes } from '../utils/constants/routes'

export const adminRoutes = [
   {
      path: routes.ADMIN.applicationById,
      element: <InnerApplication />,
   },
]
