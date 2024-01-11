import React from 'react'
import { Button as MUIButton, styled } from '@mui/material'

export const Button = (props) => <StyledButton {...props} />

const StyledButton = styled(MUIButton)(
   ({ theme, outline, width, size, padding }) => ({
      border: outline ? '1px solid #dd8a08' : 'none',
      width: width || '153px',
      borderRadius: '2px',
      background: outline ? 'white' : '#dd8a08',
      fontFamily: 'Inter, sans-serif',
      fontSize: size || '14px',
      textTransform: 'uppercase',
      color: outline ? '#DD8A08' : '#F7F7F7',
      transition: theme.transitions.create(
         ['background-color', 'border-color', 'color'],
         {
            duration: theme.transitions.duration.short,
         }
      ),
      cursor: 'pointer',
      padding: padding || '10px 16px',
      '&:hover': {
         background: '#bb7200',
         borderColor: '#bb7200',
         color: '#f7f7f7',
      },
      '&:active': {
         background: '#f2b75b',
         color: '#f7f7f7',
      },
      '&:disabled': {
         background: 'rgb(196, 196, 196)',
         cursor: 'not-allowed',
      },
   })
)
