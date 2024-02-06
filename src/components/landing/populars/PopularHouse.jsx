import { Grid, Stack } from '@mui/material'
import styled from '@emotion/styled'
import PopularHouseCard from './PopularHouseCard'
import PoppularHouseHeadline from './PoppularHouseHeadline'
import {
   ImgAsmanGuestHotel,
   ImgAsmanGuestHoues,
   ImgAsmanHotelGuestHouse,
} from '../../../assets/images'

const houses = [
   {
      id: 1,
      img: ImgAsmanGuestHotel,
      title: 'Asman guest house',
      address: '723510 Osh Muzurbek Alimbekov 9/7',
      price: '26',
      rating: '3.4',
   },
   {
      id: 2,
      img: ImgAsmanGuestHoues,
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
         <HouseCardContainer container spacing={1.25}>
            {houses.map(({ id, ...other }) => (
               <StyleContainerGrid key={id} item>
                  <PopularHouseCard {...other} />
               </StyleContainerGrid>
            ))}
         </HouseCardContainer>
      </StyleContainerStack>
   )
}

export default PopularHouse

const StyleContainerStack = styled(Stack)(() => ({
   display: 'flex',
   rowGap: '3.75rem',
   padding: '10.625rem 0',
}))

const HouseCardContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '20px',
}))

const StyleContainerGrid = styled(Grid)(() => ({
   maxWidth: '400px',
   width: '100%',
   minWidth: '300px',
}))
