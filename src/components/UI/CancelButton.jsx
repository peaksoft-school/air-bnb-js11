import React from 'react'
import { Button, styled } from '@mui/material'

export const CancelButton = (props) => {
   return (
      <CancelStyled variant="outlined" {...props}>
         cancel
      </CancelStyled>
   )
}

const CancelStyled = styled(Button)`
   && {
      padding: 8px 16px;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      color: #828282;
      background: #ffffff;
      :active {
         color: #363636;
         background: #f3f3f3;
      }
   }
`
