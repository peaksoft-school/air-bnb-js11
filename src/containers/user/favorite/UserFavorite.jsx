import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled, Typography, Box } from '@mui/material'
import { getFavorites } from '../../../store/slice/user/favoriteThunk'
import { UserNoDataImage } from '../../../assets/images'
import Card from '../../../components/UI/card/Card'

const UserFavorite = () => {
   const dispatch = useDispatch()
   const { favorites } = useSelector((state) => state.favorite)

   useEffect(() => {
      dispatch(getFavorites())
   }, [])

   return (
      <StyledContainer>
         <Box className="heading-box">
            <StyledPath>
               Main
               <span className="path-favorite"> / Favorite </span>
            </StyledPath>

            <h3 className="heading">FAVORITE</h3>
         </Box>

         <Box className="card-box">
            {favorites.length > 0 ? (
               favorites.map((item) => <Card key={item.id} {...item} />)
            ) : (
               <Box className="empty-page-box">
                  <img
                     src={UserNoDataImage}
                     alt="no data"
                     className="noData-img"
                  />
               </Box>
            )}
         </Box>
      </StyledContainer>
   )
}

export default UserFavorite

const StyledContainer = styled('div')(({ theme }) => ({
   fontSize: '16px',
   fontWeight: '400',
   fontFamily: 'Inter',
   color: 'black',
   width: '100%',
   height: '100%',
   minHeight: '88.8vh',
   backgroundColor: theme.palette.primary.white,
   padding: '0 0 0 2.50rem',

   '& .empty-page-box': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& .noData-img': {
         width: '30rem',
         height: '30rem',
      },
   },

   '& .card-box': {
      fontSize: '16px',
      fontWeight: '400',
      fontFamily: 'Inter',
      marginTop: '1.875rem',
      padding: '0 0 0 0.70rem',
   },

   '& .heading-box': {
      '& .heading': {
         padding: '0 0 0 2.50rem',
         color: 'black',
      },
   },
}))

const StyledPath = styled(Typography)({
   fontSize: '16px',
   fontWeight: '400',
   fontFamily: 'Inter',
   padding: ' 2.75rem 2.50rem',
   color: 'gray',

   '& .path-favorite': {
      color: 'black',
   },
})
