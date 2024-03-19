import { Box, Modal as MuiModal, styled } from '@mui/material'

const Modal = ({ children, onClose, open, ...rest }) => {
   return (
      <StyledModal open={open} onClose={onClose} {...rest}>
         <Box className="content">{children}</Box>
      </StyledModal>
   )
}

export default Modal

const StyledModal = styled(MuiModal)(({ theme }) => ({
   '& > .content': {
      borderRadius: '2px',
      background: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      padding: '1.25rem 1.25rem',
      transform: 'translate(-50%, -50%)',
      minWidth: '20rem',
      width: 'fit-content',
   },
}))
