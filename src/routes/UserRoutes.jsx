import Profile from '../components/profile/Profile'
import { routes } from '../utils/constants/routes'

export const userRoutes = [
   {
      path: routes.USER.profile,
      element: <Profile />,
   },
]
