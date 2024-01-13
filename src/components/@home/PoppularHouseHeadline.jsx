import { Link, Stack, Typography, styled } from '@mui/material'
import React from 'react'

const PoppularHouseHeadline = () => {
   return (
      <Stack direction="row" justifyContent="space-between" alignItems="center">
         <Stack gap={1}>
            <StyleTypography variant="h5" fontWeight={500} color="#363636">
               Popular House
            </StyleTypography>
            <Typography color="#363636">
               Helping you make the best decisions in buying, selling, & renting
               your last minute locations.
            </Typography>
         </Stack>
         <Typography
            component={Link}
            href="#"
            variant="overline"
            color="#363636"
         >
            View all
         </Typography>
      </Stack>
   )
}

export default PoppularHouseHeadline

const StyleTypography = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontSize: '20px',
   fontStyle: 'normal',
   color: '#363636',
   fontWeight: 500,
   lineHeight: 'normal',
   textTransform: 'uppercase',
}))
