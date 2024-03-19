import { Button as MuiButton, styled } from '@mui/material'
import { Google } from '../../assets/icons'

const Button = ({
   type = 'buton',
   onClick,
   disabled,
   children,
   variant,
   ...rest
}) => (
   <StyledButton
      disabled={disabled}
      type={type}
      onClick={onClick}
      variant={variant}
      {...rest}
   >
      {variant === 'google' && <Google />}

      {children}
   </StyledButton>
)

export default Button

const StyledButton = styled(MuiButton)(({ variant, theme }) => {
   const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      fontFamily: 'Inter',
      borderRadius: '0.125rem',
   }

   const commonStyles = {
      borderRadius: '0.125rem',

      '&:hover': {
         background: '#BB7200',
      },
   }

   if (variant === 'outlined') {
      return {
         '&.MuiButtonBase-root': {
            color: theme.palette.tertiary.middleGray,
            padding: '0.5rem 1rem',
            border: `0.09375rem solid ${theme.palette.tertiary.middleGray}`,

            '&:hover': {
               ...commonStyles,
               border: `0.0625rem solid ${theme.palette.secondary.main}`,
               backgroundColor: theme.palette.primary.main,
               color: '#fff',
            },

            '&:active': {
               backgroundColor: theme.palette.secondary.main,
            },
         },
      }
   }

   if (variant === 'google-button') {
      return {
         '&.MuiButtonBase-root': {
            display: 'inline-flex',
            color: theme.palette.primary.dark,
            padding: '1.25rem 9.875rem',
            border: `0.0625rem solid ${theme.palette.tertiary.lightGray}`,

            '&:hover': {
               border: `0.0625rem solid ${theme.palette.tertiary.main}`,
               backgroundColor: theme.palette.primary.main,
            },

            '&:active': {
               backgroundColor: ' rgba(196, 196, 196, 0.20)',
               border: `0.0625rem solid ${theme.palette.primary.dark}`,
            },
         },
      }
   }

   if (variant === 'cancel') {
      return {
         '&.MuiButtonBase-root': {
            color: theme.palette.tertiary.middleGray,
            padding: '0.5rem 1rem',
            border: `1px solid ${theme.palette.primary.main}`,

            '&:hover': {
               border: `1px solid ${theme.palette.tertiary.lightGray}`,
               color: theme.palette.primary.dark,
            },
         },
      }
   }

   return {
      '&.MuiButtonBase-root': {
         ...baseStyles,
         height: '2.5rem',
         backgroundColor: theme.palette.secondary.main,
         color: theme.palette.primary.white,
         padding: '0.625rem 1rem',
         border: 'none',

         '&:hover': {
            ...commonStyles,
            color: theme.palette.primary.main,
         },

         '&:active': {
            background: theme.palette.secondary.lightBrown,
         },

         '&:disabled': {
            background: theme.palette.secondary.main,
         },
      },
   }
})
