import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import { fetchProfile } from './store/slice/user/userThunk'
import { clearUserInfo } from './store/slice/user/userSlice'

const App = () => {
   const { isAuth, role } = useSelector((state) => state.auth)
   const dispatch = useDispatch()

   const getUserInfo = () => {
      if (isAuth && role === 'USER') {
         return dispatch(fetchProfile())
      }
      return dispatch(clearUserInfo())
   }

   useEffect(() => {
      getUserInfo()
   }, [isAuth])

   return <AppRoutes />
}

export default App
