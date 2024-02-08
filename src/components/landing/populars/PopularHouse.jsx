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
               <StyleContainerGrid className="card" key={id} item>
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
   alignItems: 'center',
   rowGap: '3.75rem',
   marginTop: '10.62rem',
}))

const HouseCardContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '27px',

   '& .card ': {
      cursor: 'pointer',
      transition: 'all 1s',

      '&:hover': {
         transform: 'scale(1.05)',
         boxShadow: '12px 17px 51px rgba(0, 0, 0, 0.22)',
         padding: '0px 0px',
      },

      '&:active': {
         transform: 'scale(0.95) rotateZ(1.7deg)',
      },
   },
}))

const StyleContainerGrid = styled(Grid)(() => ({
   maxWidth: '400px',
   width: '100%',
   minWidth: '300px',
}))
