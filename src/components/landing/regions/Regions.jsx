import { Box, ImageList, Typography, styled } from '@mui/material'
import {
   BatkenImage,
   BishkekImage,
   ChuiImage,
   IssykKulImage,
   JalalAbadImage,
   NarynImage,
   OshImage,
   TalasImage,
} from '../../../assets/images'

const Regions = () => (
   <StyledContainer>
      <div className="box">
         <h3 className="heading">Regions in kyrgystan </h3>
         <Typography className="description">
            You can visit the site any day and be sure that you will find
            everything for a great vacation.
         </Typography>

         <StyledImagesList>
            <Box className="image-conteiner">
               <Box className="conteiner">
                  <img className="long-image" src={ChuiImage} alt="Chui" />
                  <Typography className="text-in-image">CHUI</Typography>
               </Box>
               <Box className="image-box">
                  <Box className="image-conteiner">
                     <Box className="conteiner">
                        <img
                           className="square-image"
                           src={BatkenImage}
                           alt="Batken"
                        />
                        <Typography className="text-in-image">
                           BATKEN
                        </Typography>
                     </Box>
                     <Box className="conteiner">
                        <img
                           className="square-image"
                           src={JalalAbadImage}
                           alt="JalalAbad"
                        />
                        <Typography className="text-in-image">
                           JALALABAD
                        </Typography>
                     </Box>
                  </Box>
                  <Box className="conteiner">
                     <img className="wide-image" src={NarynImage} alt="Naryn" />
                     <Typography className="text-in-image">NARYN</Typography>
                  </Box>
               </Box>
            </Box>
         </StyledImagesList>

         <StyledImagesList>
            <Box className="image-conteiner">
               <Box className="image-box">
                  <Box className="image-conteiner">
                     <Box className="conteiner">
                        <img
                           className="square-image"
                           src={IssykKulImage}
                           alt="IssikKul"
                        />
                        <Typography className="text-in-image">
                           ISSYK-KUL
                        </Typography>
                     </Box>
                     <Box className="conteiner">
                        <img
                           className="square-image"
                           src={TalasImage}
                           alt="talas"
                        />
                        <Typography className="text-in-image">TALAS</Typography>
                     </Box>
                  </Box>
                  <Box className="conteiner">
                     <img
                        className="wide-image"
                        src={BishkekImage}
                        alt="Bishkek"
                     />
                     <Typography className="text-in-image">BISHKEK</Typography>
                  </Box>
               </Box>
               <Box className="conteiner">
                  <img className="long-image" src={OshImage} alt="Osh" />
                  <Typography className="text-in-image">OSH</Typography>
               </Box>
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
   marginBottom: '10.63rem',

   '& .box': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '10.63rem',
      gap: '1.25rem',
      width: '1240px',
   },
}))

const StyledImagesList = styled(ImageList)(({ theme }) => ({
   '& .long-image': {
      width: '31.5625rem',
      height: '38.8125rem',
   },

   '& .conteiner': {
      position: 'relative',
      marginTop: '-0.5em',
   },

   '& .square-image': {
      width: ' 21.6875rem',
      height: ' 18.875rem',
   },

   '& .wide-image': {
      width: '44.6875rem',
      height: ' 18.6875rem',
   },

   '& .image-conteiner': {
      display: 'flex',
      gap: '1.25rem',
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
      fontsize: '1rem',
      fontweight: '500',
      texttransform: 'uppercase',
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
