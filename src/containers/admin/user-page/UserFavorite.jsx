import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled, Typography, Box } from '@mui/material'
import { getFavorites } from '../../../store/slice/user/favoriteThunk'
import Card from '../../../components/UI/card/Card'

const UserFavorite = () => {
   const dispatch = useDispatch()
   const { favorites } = useSelector((state) => state.favorite)

   useEffect(() => {
      dispatch(getFavorites())
   }, [])

   return (
      <StyledContainer>
         <Box>
            <StyledPath>
               Main
               <span className="path-favorite"> / Favorite </span>
            </StyledPath>
            <h3 className="heading">FAVORITE</h3>

            <Box className="card-box">
               <Box>
                  {favorites.map((item) => (
                     <Card key={item.id} {...item} />
                  ))}
               </Box>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default UserFavorite

const StyledContainer = styled('div')(() => ({
   fontSize: '16px',
   fontWeight: '400',
   fontFamily: 'Inter',
   color: 'black',
   position: 'relative',
   top: '0rem',
   left: '6.25rem',

   '& .card-box': {
      fontSize: '16px',
      fontWeight: '400',
      fontFamily: 'Inter',
      position: 'relative',
      top: '1.875rem',
      // left: '0rem',
   },
}))

const StyledPath = styled(Typography)({
   fontSize: '16px',
   fontWeight: '400',
   fontFamily: 'Inter',
   padding: ' 2.75rem 0',
   color: 'gray',
   top: '4rem',
   '& .path-favorite': {
      color: 'black',
   },

   '& .heading': {
      color: 'black',
   },
})
