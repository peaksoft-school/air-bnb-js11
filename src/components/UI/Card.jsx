import {
   Card as MuiCard,
   CardContent,
   CardMedia,
   Typography,
   styled,
} from '@mui/material'
import { FullStarIcon, LocationIcon } from '../../assets'
import CardSlider from './CardSlider'

export const CARD_TYPE = {
   new: 'new',
   viewed: 'viewed',
}

const Card = ({ type, images = [], rating, price, actionElement }) => {
   return (
      <StyleCard className={type}>
         {images.length > 1 ? (
            <CardSlider images={images} />
         ) : (
            <StyleCardMedia image={images[0].img} />
         )}
         <CardContent sx={{ p: '7px 6px' }}>
            <StyleTypographyPrice>
               <StyleRating>
                  ${price} /<StyleSpan> day </StyleSpan>
               </StyleRating>
               <StyleTypography>
                  <FullStarIcon />
                  {rating}
               </StyleTypography>
            </StyleTypographyPrice>
            <StyleTitle title="Beautiful and picturesque kugkuyguyg yugkuyg">
               Beautiful and picturesque kugkuyguyg yugkuyg
            </StyleTitle>
            <StyleLocation>
               <LocationIcon />
               <StyleAddress title=" 12 Morris Ave, Toronto... Jibek-jolu Razzakov">
                  12 Morris Ave, Toronto.....
               </StyleAddress>
            </StyleLocation>
            <StyleKebabMenu>
               <StyleGuests>2 guests </StyleGuests>
               {actionElement}
            </StyleKebabMenu>
         </CardContent>
      </StyleCard>
   )
}

export default Card

const StyleTypography = styled(Typography)(() => ({
   width: '62px',
   height: '100%',
   flexShrink: '0',
   background: '#828282',
   borderRadius: '2px',
   display: 'flex',
   alignItems: 'center',
   gap: '5px',
   padding: '0 8px',
   color: 'white',
}))

const StyleTypographyPrice = styled('div')(() => ({
   color: '#363636',
   display: 'flex',
   justifyContent: 'space-between',
   margin: '0.5rem',
}))

const StyleSpan = styled('span')(() => ({
   color: '#7e7e7e',
   fontFamily: 'Inter',
}))

const StyleCard = styled(MuiCard)(() => ({
   cursor: 'pointer',
   boxShadow: 'none',
   fontFamily: 'Inter',
   '&.new': {
      border: '3px solid #F00',
   },
}))

const StyleCardMedia = styled(CardMedia)(() => ({
   cursor: 'pointer',
   backgroundSize: '100% 100%',
   aspectRatio: '1300/900',
}))

const StyleKebabMenu = styled(Typography)(() => ({
   display: 'flex',
   gap: '4.8rem',
   justifyContent: 'space-between',
   margin: '0.5rem',
   color: '#939393',
   fontFsamily: 'Inter',
}))

const StyleTitle = styled(Typography)(() => ({
   fontSize: '14px',
   color: '#2B2B2B',
   margin: '0.5rem',
   whiteSpace: 'nowrap',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   fontFamily: 'Inter',
}))

const StyleLocation = styled(Typography)(() => ({
   fontSize: '14px',
   color: '#828282',
   margin: '0.5rem',
   display: 'flex',
   gap: '0.5rem',
}))

const StyleAddress = styled(Typography)(() => ({
   fontSize: '14px',
   color: '#828282',
   display: 'flex',
   whiteSpace: 'nowrap',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   fontFamily: 'Inter',
}))

const StyleRating = styled(Typography)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '0.3rem',
   fontFamily: 'Inter',
}))

const StyleGuests = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontSize: '14px',
}))
