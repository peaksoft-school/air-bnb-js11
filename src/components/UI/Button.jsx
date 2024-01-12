import { Button as MuiButton, styled } from '@mui/material'
import googleIcon from '../../assets/icons/google-photo.svg'

export function Button({
   type,
   onClick,
   disabled,
   children,
   hovercolor,
   theme,
   variant = 'button',
   ...rest
}) {
   return (
      <DemoButtonStyled
         disabled={disabled}
         type={type}
         onClick={onClick}
         variant={variant}
         hovercolor={hovercolor}
         props={rest}
      >
         {variant === 'GoogleButton' && <img src={googleIcon} alt="" />}
         Button
         {children}
      </DemoButtonStyled>
   )
}

const DemoButtonStyled = styled(MuiButton)(({ variant, props, theme }) => {
   if (variant === 'button') {
      return {
         '&.MuiButtonBase-root': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '186px',
            height: '40px',
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.white,
            borderRadius: '2px',
            marginTop: '16px',
            marginLeft: '16px',
            padding: '10px 16px',
            fontSize: '14px',
            fontWeight: '500',
            border: 'none',

            '&:hover': {
               background: '#BB7200',
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
   }
   if (variant === 'longBtn') {
      return {
         '&.MuiButtonBase-root': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '350px',
            height: `${props.height}`,
            color: theme.palette.tertiary.middleGray,
            borderRadius: '2px',
            marginTop: '16px',
            marginLeft: '16px',
            padding: ' 8px 16px',
            fontSize: '14px',
            fontWeight: '500',
            border: `1px solid ${theme.palette.tertiary.middleGray}`,
            '&:hover': {
               border: `1px solid ${theme.palette.primary.dark}`,
               backgroundColor: theme.palette.primary.main,
            },
            '&:active': {
               backgroundColor: theme.palette.secondary.main,
            },
         },
      }
   }
   if (variant === 'googleButton') {
      return {
         '&.MuiButtonBase-root': {
            display: ' inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            width: '445px',
            height: `${props.height}`,
            color: theme.palette.primary.dark,
            borderRadius: '8px',
            marginTop: '16px',
            marginLeft: '16px',
            padding: ' 10px 158px',
            fontSize: '18px',
            fontWeight: '500',
            border: `1px solid ${theme.palette.tertiary.lightGray}`,
            '&:hover': {
               border: `1px solid ${theme.palette.tertiary.main}`,
               backgroundColor: theme.palette.primary.main,
            },
            '&:active': {
               backgroundColor: theme.palette.tertiary.middleGray,
               border: `1px solid ${theme.palette.primary.dark}`,
            },
         },
      }
   }
   if (variant === 'cancel') {
      return {
         '&.MuiButtonBase-root': {
            display: ' flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '150px',
            height: `${props.height}`,
            color: theme.palette.tertiary.middleGray,
            borderRadius: '2px',
            marginTop: '16px',
            marginLeft: '16px',
            padding: ' 8px 16px',
            fontSize: '14px',
            fontWeight: '400',
            border: `1px solid ${theme.palette.tertiary.lightGray}`,
            '&:hover': {
               backgroundColor: theme.palette.primary.main,
               color: theme.palette.primary.dark,
            },
         },
      }
   }
   return {}
})
