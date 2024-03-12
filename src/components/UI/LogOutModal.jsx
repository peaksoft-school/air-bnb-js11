import { useDispatch } from 'react-redux'
import { Box, styled } from '@mui/material'
import Modal from './Modal'
import Button from './Button'
import { AUTH_ACTIONS } from '../../store/slice/auth/authSlice'
import { showToast } from '../../utils/helpers/toast'

const LogOutModal = ({ open, onClose }) => {
   const dispatch = useDispatch()

   const logOutHandler = () => {
      dispatch(AUTH_ACTIONS.logOut({ showToast }))

      onClose()
   }

   return (
      <Modal open={open} onClose={onClose}>
         <StyledContainer>
            <h2>LOG OUT</h2>

            <p>Are you sure you want to log out</p>

            <Box className="buttons">
               <Button variant="cancel" className="cancel" onClick={onClose}>
                  CANCEL
               </Button>

               <Button className="log-out" onClick={logOutHandler}>
                  LOG OUT
               </Button>
            </Box>
         </StyledContainer>
      </Modal>
   )
}

export default LogOutModal

const StyledContainer = styled(Box)(() => ({
   marginTop: '20px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',

   '& > h2': {
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '21.78px',
   },

   '& > p': {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '19.36px',
      marginTop: '20px',
   },

   '& > .buttons': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px',
      marginTop: '30px',

      '& > .cancel': {
         width: '150px',
      },

      '& > .log-out': {
         width: '196px',
      },
   },
}))
