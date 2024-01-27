import {
   Box,
   Card,
   CardContent,
   CardMedia,
   Typography,
   styled,
} from '@mui/material'
import { FullStarIcon, LocationIcon } from '../../../assets/icons'

const PopularHouseCard = ({ img, title, address, price, rating }) => {
   return (
      <StyleCard>
         <StyleCardMedia image={img}>
            <StyleBox>
               <StyleTypography>
                  <FullStarIcon />
                  {rating}
               </StyleTypography>
            </StyleBox>
         </StyleCardMedia>
         <CardContent>
            <StyleTypographyTitle>{title}</StyleTypographyTitle>
            <StyleTypographyAddress>
               <LocationIcon /> {address}
            </StyleTypographyAddress>
            <StyleTypographyPrice>
               ${price} /<StyleSpan> day</StyleSpan>
            </StyleTypographyPrice>
         </CardContent>
      </StyleCard>
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

const StyleBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-end',
   padding: '1.5rem 0.7rem',
}))

const StyleSpan = styled('span')(() => ({
   color: '#7e7e7e',
}))
const StyleTypographyAddress = styled(Typography)(() => ({
   color: '#7e7e7e',
}))
const StyleTypographyPrice = styled(Typography)(() => ({
   color: '#363636',
}))
const StyleTypographyTitle = styled(Typography)(() => ({
   color: '#363636',
}))
const StyleCard = styled(Card)(() => ({
   cursor: 'pointer',
   boxShadow: 'none',
}))
const StyleCardMedia = styled(CardMedia)(() => ({
   cursor: 'pointer',
   width: '100%',
   backgroundSize: '100% 100%',
   aspectRatio: '900/1200',
}))
