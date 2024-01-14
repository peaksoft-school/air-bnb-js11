import { styled } from '@mui/material'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => (
   <StyledToastContainer position="top-right" hideProgressBar={false} />
)

export default Notification

const StyledToastContainer = styled(ToastContainer)(() => ({
   width: '100%',
   maxWidth: ' 38.25rem',
}))
