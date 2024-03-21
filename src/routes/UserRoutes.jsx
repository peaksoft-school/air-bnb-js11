import Profile from '../components/profile/Profile'
import InnerAnnouncement from '../components/user/profile/InnerAnnouncement'
import UserFavorite from '../containers/user/UserFavorite'
import { routes } from '../utils/constants/routes'

export const userRoutes = [
   {
      path: routes.USER.profile,
      element: <Profile />,
   },
   {
      path: routes.USER.announcement,
      element: <InnerAnnouncement />,
   },
   { path: routes.USER.favorite, element: <UserFavorite /> },
]
