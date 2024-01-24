import { Button as MuiButton, styled } from '@mui/material'
import { GoogleIcon } from '../../assets'

const Button = ({
   type = 'submit',
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
      {variant === 'google-button' && <GoogleIcon />}

      {children}
   </StyledButton>
)

export default Button

const StyledButton = styled(MuiButton)(({ variant, theme }) => {
   const baseStyles = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      fontSize: '1rem',
      fontWeight: '500',
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
               border: `0.0625rem solid ${theme.palette.primary.dark}`,
               backgroundColor: theme.palette.primary.main,
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
               backgroundColor: theme.palette.tertiary.middleGray,
               border: `0.0625rem solid ${theme.palette.primary.dark}`,
            },
         },
      }
   }

   if (variant === 'cancel') {
      return {
         '&.MuiButtonBase-root': {
            display: 'flex',
            color: theme.palette.tertiary.middleGray,
            padding: '0.5rem 1rem',
            border: `0.0625rem solid ${theme.palette.tertiary.lightGray}`,

            '&:hover': {
               backgroundColor: theme.palette.primary.main,
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
            background: theme.palette.tertiary.lightGray,
         },
      },
   }
})
