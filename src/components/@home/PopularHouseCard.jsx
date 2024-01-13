import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { FullStarIcon } from '../../assets'

const PopularHouseCard = () => {
   return (
      <Card>
         <CardMedia>
            <Box display="flex">
               <FullStarIcon />
               <Typography>3.4</Typography>
            </Box>
         </CardMedia>
      </Card>
   )
}

export default PopularHouseCard
