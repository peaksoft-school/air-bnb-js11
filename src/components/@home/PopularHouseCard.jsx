import {
   Box,
   Card,
   CardContent,
   CardMedia,
   Typography,
   styled,
} from '@mui/material'
import { FullStarIcon, LocationIcon } from '../../assets'

const PopularHouseCard = ({ img, title, address, price }) => {
   return (
      <Card elevation={0}>
         <CardMedia
            image={img}
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
            <Typography>{title}</Typography>
            <Typography>
               <LocationIcon /> {address}
            </Typography>
            <Typography>${price} / day</Typography>
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
