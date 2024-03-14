import UserFavorite from '../containers/user/UserFavorite'
import { routes } from '../utils/constants/routes'

export const userRoutes = [
   { path: routes.USER.favorite, element: <UserFavorite /> },
]
