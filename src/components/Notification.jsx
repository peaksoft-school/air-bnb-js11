import { styled } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => (
   <StyledToastContainer hideProgressBar={false} icon={false} />
)

export default Notification

const StyledToastContainer = styled(ToastContainer)(() => ({
   width: 'fit-content',
   maxWidth: ' 38.25rem',
   minWidth: '20rem',
}))
