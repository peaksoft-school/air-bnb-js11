import AllHousing from '../components/admin/AllHousing'
import Application from '../components/admin/Application'
import { routes } from '../utils/constants/routes'

export const adminRoutes = [
   { path: routes.ADMIN.application, element: <Application /> },
   { path: routes.ADMIN.allHousing, element: <AllHousing /> },
]
