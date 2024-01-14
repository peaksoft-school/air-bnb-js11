import { Box, Container, Stack, Typography, styled } from '@mui/material'
import {
   InstagramIcon,
   LogoIcon,
   TelegramIcon,
   WhatsAppIcon,
} from '../../assets'

const Footer = () => {
   return (
      <StyleContainer>
         <Container>
            <Stack py={1.25}>
               <Stack direction="row" justifyContent="space-between" py={3.75}>
                  <Stack direction="row" gap={2}>
                     <Typography>Regions</Typography>
                     <StyleTypography>leave an ad</StyleTypography>
                  </Stack>
                  <LogoIcon />
                  <Stack direction="row" gap={2}>
                     <InstagramIcon />
                     <TelegramIcon />
                     <WhatsAppIcon />
                  </Stack>
               </Stack>
               <StyleTypographyPeaksoft>
                  © Copyright PeakSoft. All Rights Reserved
               </StyleTypographyPeaksoft>
            </Stack>
         </Container>
      </StyleContainer>
   )
}

export default Footer

const StyleContainer = styled(Box)(() => ({
   background: '#1C2E20',
   color: '#fff',
   fontFamily: 'Inter',
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
