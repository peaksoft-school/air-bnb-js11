import { Grid, Stack } from '@mui/material'
import PopularHouseCard from './PopularHouseCard'
import PoppularHouseHeadline from './PoppularHouseHeadline'

const DUMMU_DATA = [{ id: 2 }, { id: 2 }, { id: 3 }]

const PopularHouse = () => {
   return (
      <Stack rowGap={3.75} py={10.625}>
         <PoppularHouseHeadline />
         <Grid container spacing={1.25}>
            {DUMMU_DATA.map(({ id }) => (
               <Grid key={id} item md={4} sm={12}>
                  <PopularHouseCard />
               </Grid>
            ))}
         </Grid>
      </Stack>
   )
}

export default PopularHouse
