import UserFavorite from '../containers/user/favorite/UserFavorite'
import UserInnerRegion from '../containers/user/innerRegion/UserInnerRegion'
import { routes } from '../utils/constants/routes'

export const userRoutes = [
   { path: routes.USER.favorite, element: <UserFavorite /> },
   { path: routes.USER.innerRegion, element: <UserInnerRegion /> },
]
