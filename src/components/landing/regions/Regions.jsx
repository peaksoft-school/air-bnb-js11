import { ImageList, styled } from '@mui/material'
import Chui from '../../../assets/images/chui.png'
import Batken from '../../../assets/images/batken.png'
import JalalAbad from '../../../assets/images/jalalAbad.png'
import Naryn from '../../../assets/images/naryn.png'
import IssykKul from '../../../assets/images/issyk-kul.png'
import Talas from '../../../assets/images/talas.png'
import Bishkek from '../../../assets/images/bishkek.png'
import Osh from '../../../assets/images/osh.png'

const Regions = () => {
   return (
      <StyledCont>
         <StyledConteiner>
            <h3 className="heading">Regions in kyrgystan </h3>
            <p className="text">
               You can visit the site any day and be sure that you will find
               everything for a great vacation.
            </p>
            <StyledImageList>
               <div className="image-conteiner">
                  <div className="conteiner">
                     <img className="long-image" src={Chui} alt="Chui" />
                     <p className="text-in-image">CHUI</p>
                  </div>
                  <div className="image-box">
                     <div className="image-conteiner">
                        <div className="conteiner">
                           <img
                              className="square-image"
                              src={Batken}
                              alt="Batken"
                           />
                           <p className="text-in-image">BATKEN</p>
                        </div>
                        <div className="conteiner">
                           <img
                              className="square-image"
                              src={JalalAbad}
                              alt="JalalAbad"
                           />
                           <p className="text-in-image">JALALABAD</p>
                        </div>
                     </div>
                     <div className="conteiner">
                        <img className="wide-image" src={Naryn} alt="Naryn" />
                        <p className="text-in-image">NARYN</p>
                     </div>
                  </div>
               </div>
            </StyledImageList>

            <StyledImageList>
               <div className="image-conteiner">
                  <div className="image-box">
                     <div className="image-conteiner">
                        <div className="conteiner">
                           <img
                              className="square-image"
                              src={IssykKul}
                              alt="IssikKul"
                           />
                           <p className="text-in-image">ISSYK-KUL</p>
                        </div>
                        <div className="conteiner">
                           <img
                              className="square-image"
                              src={Talas}
                              alt="talas"
                           />
                           <p className="text-in-image">TALAS</p>
                        </div>
                     </div>
                     <div className="conteiner">
                        <img
                           className="wide-image"
                           src={Bishkek}
                           alt="Bishkek"
                        />
                        <p className="text-in-image">BISHKEK</p>
                     </div>
                  </div>
                  <div className="conteiner">
                     <img className="long-image" src={Osh} alt="Osh" />
                     <p className="text-in-image">OSH</p>
                  </div>
               </div>
            </StyledImageList>
         </StyledConteiner>
      </StyledCont>
   )
}

export default Regions

const StyledCont = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
}))

const StyledImageList = styled(ImageList)(({ theme }) => ({
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

   '& .text': {
      color: theme.palette.primary.main,
      fontSize: '1rem',
      fontWeight: '400',
      marginBottom: '3.75rem',
   },

   '&.MuiImageList-root': {
      overflow: 'hidden',
   },
}))

const StyledConteiner = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '10.63rem',
   gap: '1.25rem',
   width: '1240px',
}))
