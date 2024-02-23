import { Box, Modal as Modalka, styled } from '@mui/material'

const Modal = ({ children, onClose, open, ...rest }) => {
   return (
      <StyledModal open={open} onClose={onClose} {...rest}>
         <Box className="box">{children}</Box>
      </StyledModal>
   )
}

export default Modal

const StyledModal = styled(Modalka)(({ theme }) => ({
   '& .box': {
      borderRadius: '12px',
      background: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      padding: '1.25rem 1.25rem',
      transform: 'translate(-50%, -50%)',
      boxShadow: 24,
      p: 4,
      minWidth: '20rem',
      width: '20rem',
   },
}))
