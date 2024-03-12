import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import { USER_THUNKS } from './store/slice/user/userThunk'
import { USER_ACTIONS } from './store/slice/user/userSlice'
import './App.css'

const App = () => {
   const { isAuth, role } = useSelector((state) => state.auth)

   const dispatch = useDispatch()

   useEffect(() => {
      if (isAuth && role === 'USER') dispatch(USER_THUNKS.getUserInfo())

      dispatch(USER_ACTIONS.clearUserInfo())
   }, [isAuth])

   return <AppRoutes />
}

export default App
