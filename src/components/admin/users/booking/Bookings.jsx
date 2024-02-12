import React from 'react'
import { Box, styled } from '@mui/material'
import { data } from '../../../../utils/constants'
import Card from '../../../UI/card/Card'

const Bookings = () => {
   const bookingOptions = [
      {
         title: 'Edit',
         onClick: (id) => {
            console.log(`edit ${id}`)
         },
      },
      {
         title: 'Delete',
         onClick: (id) => {
            console.log(`delete ${id}`)
         },
      },
   ]

   return (
      <StyledBooking>
         {data.map(({ guests, images, location, price, rating, title, id }) => (
            <Card
               key={guests}
               guests={guests}
               images={images}
               localtion={location}
               price={price}
               rating={rating}
               title={title}
               option={bookingOptions}
               id={id}
            />
         ))}
      </StyledBooking>
   )
}

export default Bookings

const StyledBooking = styled(Box)(() => ({
   display: 'flex',
   gap: '20px',
}))
