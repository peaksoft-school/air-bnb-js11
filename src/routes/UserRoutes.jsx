import UserFavorite from '../containers/admin/user-page/UserFavorite'
import { routes } from '../utils/constants/routes'

export const userRoutes = [
   { path: routes.USER.favorite, element: <UserFavorite /> },
]
