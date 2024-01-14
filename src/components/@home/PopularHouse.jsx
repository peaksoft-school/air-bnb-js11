import { Grid, Stack } from '@mui/material'
import PopularHouseCard from './PopularHouseCard'
import PoppularHouseHeadline from './PoppularHouseHeadline'
import ImgAsmanHotelGuestHouse from '../../assets/images/hotel-mansion.jpg'
import ImgAsmanguesthoues from '../../assets/images/hotel-mansion-img-2.jpg'
import ImgAsmanGuestHotel from '../../assets/images/hotel-mansion-img-3.jpg'

const DUMMU_DATA = [
   {
      id: 2,
      img: ImgAsmanGuestHotel,
      title: 'Asman guest house',
      address: '723510 Osh Muzurbek Alimbekov 9/7',
      price: '26',
   },
   {
      id: 2,
      img: ImgAsmanguesthoues,
      title: 'Asman guest house',
      address: '723510 Osh Muzurbek Alimbekov 9/7',
      price: '26',
   },
   {
      id: 3,
      img: ImgAsmanHotelGuestHouse,
      title: 'Asman guest house',
      address: '723510 Osh Muzurbek Alimbekov 9/7',
      price: '26',
   },
]

const PopularHouse = () => {
   return (
      <Stack rowGap={3.75} py={10.625}>
         <PoppularHouseHeadline />
         <Grid container spacing={1.25}>
            {DUMMU_DATA.map(({ id, ...other }) => (
               <Grid key={id} item md={4} sm={12}>
                  <PopularHouseCard {...other} />
               </Grid>
            ))}
         </Grid>
      </Stack>
   )
}

export default PopularHouse
