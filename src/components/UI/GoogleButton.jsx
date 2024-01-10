import React from 'react'
import { Button, styled } from '@mui/material'
import { ReactComponent as GoogleIcon } from '../../assets/icons/google-photo.svg'

const GoogleButton = (props) => {
   return (
      <GoogleStyledButton {...props}>
         <GoogleIcon />
         {/* {props && googleIcon}
         <Title size="18px" weight="bolds">
            {props}
         </Title> */}
      </GoogleStyledButton>
   )
}

const GoogleStyledButton = styled(Button)`
   && {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 18.5px;
      padding: 10px;
      width: 30%;
      border: 1px solid #c4c4c4;
      border-radius: 8px;
      background-color: #ffffff;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
         border: 1px solid #828282;
      }
      &:active {
         background: rgba(196, 196, 196, 0.2);
         border: 1px solid #828282;
      }
   }
`

export default GoogleButton
