import {
   Box,
   Card,
   CardContent,
   CardMedia,
   Typography,
   styled,
} from '@mui/material'
import React from 'react'
import { FullStarIcon, LocationIcon } from '../../assets'
import ImgHouse from '../../assets/images/Rectangle 15 (3).jpg'

const PopularHouseCard = () => {
   return (
      <Card elevation={0}>
         <CardMedia
            image={ImgHouse}
            sx={{
               width: '100%',
               backgroundSize: '100% 100%',
               aspectRatio: '900/1200',
            }}
         >
            <Box
               display="flex"
               alignItems="center"
               justifyContent="flex-end"
               px={1.65}
               py={3}
            >
               <StyleTypography>
                  <FullStarIcon /> 3.4
               </StyleTypography>
            </Box>
         </CardMedia>
         <CardContent>
            <Typography>Asman guest house</Typography>
            <Typography>
               <LocationIcon /> 723510 Osh Muzurbek Alimbekov 9/7
            </Typography>
            <Typography>$26 /day</Typography>
         </CardContent>
      </Card>
   )
}

export default PopularHouseCard

const StyleTypography = styled(Typography)(() => ({
   width: '62px',
   height: '100%',
   flexShrink: '0',
   background: '#677082ca',
   borderRadius: '2px',
   display: 'flex',
   alignItems: 'center',
   gap: '5px',
   padding: '0 8px',
   color: 'white',
}))
