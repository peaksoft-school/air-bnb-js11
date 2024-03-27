import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled } from '@mui/material'
import { getModeration } from '../../../store/slice/user/house/houseThunk'
import LoadingSpinner from '../../UI/LoadingSpinner'
import Card from '../../UI/card/Card'
import { UserNoDataImage } from '../../../assets/images'

const OnModeration = () => {
   const dispatch = useDispatch()
   const { moderation, isLoading } = useSelector((state) => state.houses)

   useEffect(() => {
      dispatch(getModeration())
   }, [])

   if (isLoading) {
      return <LoadingSpinner />
   }

   return (
      <StyledModeration>
         {moderation && moderation.length > 0 ? (
            moderation.map((moderation) => (
               <Card
                  key={moderation.id}
                  onModeration
                  onNavigate
                  {...moderation}
               />
            ))
         ) : (
            <img src={UserNoDataImage} alt="no house" />
         )}
      </StyledModeration>
   )
}

export default OnModeration

const StyledModeration = styled(Box)(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   gap: '10px',

   '& > p': {
      fontSize: '30px',
      margin: '0 auto',
   },

   '& > img': {
      width: '500px',
      margin: '0 auto',
   },
}))
