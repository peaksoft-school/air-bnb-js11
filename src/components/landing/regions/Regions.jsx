import { Link } from 'react-router-dom'
import { Box, ImageList, Typography, styled } from '@mui/material'
import Chui from './allRegion/Chui'
import Batken from './allRegion/Batken'
import JalalAbad from './allRegion/JalalAbad'
import Naryn from './allRegion/Naryn'
import IssykKul from './allRegion/IssykKul'
import Talas from './allRegion/Talas'
import Bishkek from './allRegion/Bishkek'
import Osh from './allRegion/Osh'

const Regions = () => (
   <StyledContainer>
      <div className="box">
         <h2
            style={{
               fontFamily: 'Arial, Helvetica, sans-serif',
               textTransform: 'uppercase',
            }}
            className="heading"
         >
            Regions in kyrgystan{' '}
         </h2>
         <Typography className="description">
            You can visit the site any day and be sure that you will find
            everything for a great vacation.
         </Typography>

         <StyledImagesList>
            <Box className="image-conteiner">
               <Link to="/user/inner-region/chui" className="link">
                  <Chui />
               </Link>
               <Box className="image-box">
                  <Box className="image-conteiner">
                     <Link to="/user/inner-region/batken" className="link">
                        <Batken />
                     </Link>
                     <Link to="/user/inner-region/jalal-abad" className="link">
                        <JalalAbad />
                     </Link>
                  </Box>
                  <Link to="/user/inner-region/naryn" className="link">
                     <Naryn />
                  </Link>
               </Box>
            </Box>
         </StyledImagesList>
         <StyledImagesList>
            <Box className="image-conteiner">
               <Box className="image-box">
                  <Box className="image-conteiner">
                     <Link to="/user/inner-region/issyk-kul" className="link">
                        <IssykKul />
                     </Link>
                     <Link to="/user/inner-region/talas" className="link">
                        <Talas />
                     </Link>
                  </Box>
                  <Bishkek />
               </Box>
               <Link to="/user/inner-region/osh" className="link">
                  <Osh />
               </Link>
            </Box>
         </StyledImagesList>
      </div>
   </StyledContainer>
)

export default Regions

const StyledContainer = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   marginBottom: '10.62rem',
   cursor: 'pointer',

   '& .box': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '10.62rem',
      gap: '1.25rem',
      width: '1240px',
   },
}))

const StyledImagesList = styled(ImageList)(({ theme }) => ({
   '& .image-conteiner': {
      display: 'flex',
      gap: '1.25rem',

      '& .link': {
         textDecoration: 'none',
      },
   },

   '& .image-box': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
   },

   ' & .text-in-image': {
      position: 'absolute',
      left: '1.25rem',
      bottom: '1.25rem',
      color: theme.palette.primary.main,
      fontSize: '1rem',
      fontWeight: '500',
      textTransform: 'uppercase',
   },

   '& .heading': {
      color: theme.palette.primary.main,
      fontSize: '1.25rem',
      fontWeight: '400',
      marginBottom: '0.88rem',
   },

   '& .description': {
      color: theme.palette.primary.main,
      fontSize: '1rem',
      fontWeight: '400',
      marginBottom: '3.75rem',
   },

   '&.MuiImageList-root': {
      overflow: 'hidden',
   },
}))
