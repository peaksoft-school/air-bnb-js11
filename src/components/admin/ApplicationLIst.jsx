import { Grid, styled } from '@mui/material'
import { DYMMY_DATA } from '../../utils/constants/admin-aplication'
import ApplicationCardItem from './ApplicationCardItem'

const ApplicationLIst = () => {
   return (
      <StyleGrid container spacing={1}>
         {DYMMY_DATA.map((el) => (
            <Grid
               xl={2}
               lg={3}
               md={4}
               sm={6}
               xs={12}
               key={el.id}
               item
               display="grid"
            >
               <ApplicationCardItem el={el} />
            </Grid>
         ))}
      </StyleGrid>
   )
}

export default ApplicationLIst

const StyleGrid = styled(Grid)(() => ({
   padding: '29px 0',
}))
