import UserFavorite from '../containers/user/favorite/UserFavorite'
import UserInnerRegion from '../containers/user/innerRegion/UserInnerRegion'
import Profile from '../components/profile/Profile'
import InnerAnnouncement from '../components/user/profile/InnerAnnouncement'
import AddHouse from '../containers/user/AddHouse'

import { routes } from '../utils/constants/routes'
import InnerRegion from '../containers/user/innerRegion/InnerRegion'

export const userRoutes = [
   {
      path: routes.USER.profile,
      element: <Profile />,
   },
   {
      path: routes.USER.announcement,
      element: <InnerAnnouncement />,
   },
   { path: routes.USER.addHouse, element: <AddHouse /> },
   { path: routes.USER.favorite, element: <UserFavorite /> },
   { path: routes.USER.innerRegion, element: <UserInnerRegion /> },
   { path: routes.USER.innerRegionsCard, element: <InnerRegion /> },
]
