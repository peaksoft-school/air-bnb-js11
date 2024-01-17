import { Grid, styled } from '@mui/material'
import CardApplication from './CardApplication'
import { DYMMY_DATA } from '../../utils/constants/admin-aplication'

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
               <CardApplication {...el} />
            </Grid>
         ))}
      </StyleGrid>
   )
}

export default ApplicationLIst

const StyleGrid = styled(Grid)(() => ({
   padding: '29px 0',
}))
