import { Box, Container, Link, Stack, Typography, styled } from '@mui/material'
import {
   InstagramIcon,
   LogoIcon,
   TelegramIcon,
   WhatsAppIcon,
} from '../../assets/icons'

const Footer = () => {
   return (
      <StyleContainer>
         <Container>
            <Stack py={1.25}>
               <StyleStackContainer>
                  <StyleStackHover>
                     <Typography component={Link} href="#">
                        Regions
                     </Typography>
                     <StyleTypography component={Link} href="#">
                        leave an ad
                     </StyleTypography>
                  </StyleStackHover>
                  <LogoIcon />
                  <StyleStacSocial>
                     <InstagramIcon />
                     <TelegramIcon />
                     <WhatsAppIcon />
                  </StyleStacSocial>
               </StyleStackContainer>
               <StyleTypographyPeaksoft>
                  © Copyright PeakSoft. All Rights Reserved
               </StyleTypographyPeaksoft>
            </Stack>
         </Container>
      </StyleContainer>
   )
}

export default Footer

const StyleStackHover = styled(Stack)(() => ({
   cursor: 'pointer',
   flexDirection: 'row',
   gap: '2.4rem',
}))

const StyleStackContainer = styled(Stack)(() => ({
   flexDirection: 'row',
   gap: '1rem',
   padding: '3.75rem 0',
   justifyContent: 'space-between',
}))

const StyleContainer = styled(Box)(() => ({
   background: '#1C2E20',
   color: '#fff',
   fontFamily: 'Inter',
}))

const StyleStacSocial = styled(Stack)(() => ({
   flexDirection: 'row',
   gap: '1rem',
}))
const StyleTypography = styled(Typography)(() => ({
   color: '#FFBE58',
   fontFamily: 'Inter',
}))

const StyleTypographyPeaksoft = styled(Typography)(() => ({
   color: '#859589',
   fontFamily: 'Inter',
   textAlign: 'center',
}))
