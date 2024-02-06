import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const PrivateRoutes = ({ component: Component, fallBackPath, roles }) => {
   const { role, isAuth } = useSelector((state) => state.auth)

   const isAllowed = () => roles.includes(role)

   if (isAuth && isAllowed()) {
      return Component
   }

   return <Navigate to={fallBackPath} />
}

export default PrivateRoutes
