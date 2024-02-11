import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const PrivateRoutes = ({
   component: Component,
   fallBackPath,
   roles,
   role,
   isAuth,
}) => {
   const isAllowed = () => roles.includes(role)

   if (isAuth && isAllowed()) {
      return Component
   }

   return <Navigate to={fallBackPath} />
}

export default PrivateRoutes
