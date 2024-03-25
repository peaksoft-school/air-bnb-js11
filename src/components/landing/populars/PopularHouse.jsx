import { Grid, Stack } from '@mui/material'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import PopularHouseCard from './PopularHouseCard'
import PoppularHouseHeadline from './PoppularHouseHeadline'
import { axiosInstance } from '../../../configs/axiosInstance'

const PopularHouse = () => {
   const [popularHouse, setPopularHouse] = useState([])

   const getPopularHouse = async () => {
      try {
         const { data } = await axiosInstance.get(
            '/api/houses/getPopularHouses'
         )

         return setPopularHouse(data)
      } catch (error) {
         return error
      }
   }

   useEffect(() => {
      getPopularHouse()
   }, [])

   return (
      <StyleContainerStack>
         <PoppularHouseHeadline />
         <HouseCardContainer container spacing={1.25}>
            {popularHouse.map(({ id, ...other }) => (
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
      padding: '0px 0px',

      '&:hover': {
         boxShadow: '0 0 15px rgba(0, 0, 0, 0.22)',
      },
   },
}))

const StyleContainerGrid = styled(Grid)(() => ({
   maxWidth: '400px',
   width: '100%',
   minWidth: '300px',
}))
