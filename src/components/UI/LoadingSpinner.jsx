import { Box, CircularProgress, styled } from '@mui/material'
import React from 'react'

const LoadingSpinner = () => (
   <StyledLoadingContainer>
      <CircularProgress color="warning" />
   </StyledLoadingContainer>
)

export default LoadingSpinner

const StyledLoadingContainer = styled(Box)(() => ({
   '& .MuiCircularProgress-indeterminate': {
      width: '70px !important',
      height: '70px !important',
      alignSelf: 'center',
   },

   position: 'absolute',
   top: 0,
   left: 0,
   backdropFilter: 'blur(3px)',
   width: '100%',
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
}))
