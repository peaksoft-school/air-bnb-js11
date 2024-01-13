import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import PopularHouseCard from './PopularHouseCard'

const PopularHouse = () => {
   return (
      <Stack>
         <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
         >
            <Stack gap={1}>
               <Typography variant="h5" fontWeight={500} color="#363636">
                  Popular House
               </Typography>
               <Typography color="#363636">
                  Helping you make the best decisions in buying, selling, &
                  renting your last minute locations.
               </Typography>
            </Stack>
            <Typography
               component={Link}
               href="#"
               variant="overline"
               color="#363636"
            >
               View all
            </Typography>
         </Stack>
         <Stack>
            <PopularHouseCard />
         </Stack>
      </Stack>
   )
}

export default PopularHouse
