import { Container, Typography, styled } from '@mui/material'
import React from 'react'
import ApplicationLIst from '../../components/admin/ApplicationLIst'

const Application = () => {
   return (
      <StyleContainer maxWidth="xl">
         <StyleTypography>APPLICATION</StyleTypography>
         <ApplicationLIst />
      </StyleContainer>
   )
}

export default Application

const StyleContainer = styled(Container)(() => ({
   padding: '2rem',
}))

const StyleTypography = styled(Typography)(() => ({
   color: '#000000',
   fontFamily: 'Inter',
   fontSize: '20px',
   textTransform: 'uppercase',
   lineHeight: 'normal',
   fontWeight: 500,
}))
