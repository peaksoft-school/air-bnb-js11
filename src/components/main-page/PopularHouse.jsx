import { Grid, Stack } from '@mui/material'
import styled from '@emotion/styled'
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
      rating: '3.4',
   },
   {
      id: 2,
      img: ImgAsmanguesthoues,
      title: 'Asman guest house',
      address: '723510 Osh Muzurbek Alimbekov 9/7',
      price: '26',
      rating: '3.4',
   },
   {
      id: 3,
      img: ImgAsmanHotelGuestHouse,
      title: 'Asman guest house',
      address: '723510 Osh Muzurbek Alimbekov 9/7',
      price: '26',
      rating: '3.4',
   },
]

const PopularHouse = () => {
   return (
      <StyleContainerStack>
         <PoppularHouseHeadline />
         <Grid container spacing={1.25}>
            {DUMMU_DATA.map(({ id, ...other }) => (
               <StyleContainerGrid key={id} item>
                  <PopularHouseCard {...other} />
               </StyleContainerGrid>
            ))}
         </Grid>
      </StyleContainerStack>
   )
}

export default PopularHouse

const StyleContainerStack = styled(Stack)(() => ({
   display: 'flex',
   rowGap: '3.75rem',
   padding: '10.625rem 0',
}))

const StyleContainerGrid = styled(Grid)(() => ({
   width: '23rem',
   margin: '0.60rem',
}))
