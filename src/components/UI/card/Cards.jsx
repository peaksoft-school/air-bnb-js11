import React, { useState } from 'react'
import { styled } from '@mui/material'
import Button from '../Button'
import { FullStarIcon, HeartIcon, LocationIcon } from '../../../assets'
import CardImgSlider from './CardImgSlider'

const Cards = ({
   price,
   rating,
   images,
   title,
   localtion,
   guests,
   isLike,
   blocked,
   newCard,
}) => {
   const [, setIsLike] = useState(false)

   const changeIsLike = () => {
      setIsLike((prev) => !prev)
   }

   const role = 'ADMIN'

   return (
      <CardContainer blocked={blocked} newCard={newCard}>
         <CardImgSlider img={images} />
         <CardInnerContainer>
            <PriceRatingInfo>
               <Price>
                  ${price} / <span>day</span>
               </Price>
               <Rating>
                  <FullStarIcon />
                  {rating}
               </Rating>
            </PriceRatingInfo>
            <HouseInfo>{title}</HouseInfo>
            <HouseLocation>
               <LocationIcon /> {localtion}
            </HouseLocation>
            <LastContainer>
               <Guests>{guests} guests</Guests>
               {/* eslint-disable-next-line no-nested-ternary */}
               {role === 'USER' ? (
                  blocked ? (
                     <Button disabled>Blocked</Button>
                  ) : (
                     <div>
                        <Button>BOOK</Button>
                        <StyledHeartIcon onClick={changeIsLike} like={isLike} />
                     </div>
                  )
               ) : (
                  <div>awd</div>
               )}
            </LastContainer>
         </CardInnerContainer>
      </CardContainer>
   )
}

export default Cards

const CardContainer = styled('div')(({ blocked, newCard }) => ({
   maxWidth: '300px',
   width: '100%',
   minWidth: '200px',
   backgroundColor: `${blocked ? '#D4D4D466' : '#f7f7f7'}`,
   opacity: blocked ? 0.6 : 1,
   borderRadius: '4px',
   transition: '200ms',
   cursor: 'default',
   border: `${newCard ? '3px solid red' : ''}`,
   padding: '2px',

   '&:hover': {
      backgroundColor: `${!blocked ? '#fff' : ''}`,
      boxShadow: `${!blocked ? '0px -1px 10px 0px #ecedf2' : ''}`,
   },
}))

const CardInnerContainer = styled('div')(() => ({
   padding: '20px',
}))

const PriceRatingInfo = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   margin: '0 0 18px 0',
}))

const Price = styled('p')(() => ({
   margin: '0',
   fontSize: '18px',

   '& span': {
      color: '#6C6C6C',
      fontFamily: 'Inter',
      fontSize: '16px',
   },
}))

const Rating = styled('p')(() => ({
   margin: '0',
   backgroundColor: '#828282',
   padding: '4px 11px',
   display: 'flex',
   alignItems: 'center',
   color: '#fff',
   gap: '4px',
   borderRadius: '4px',
}))

const HouseInfo = styled('p')(() => ({
   margin: '0',
   textWrap: 'nowrap',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   fontSize: '16px',
   color: '#2B2B2B',
   marginBottom: '8px',
}))

const HouseLocation = styled('p')(() => ({
   margin: '0 0 22px',
   fontFamily: 'Inter',
   fontSize: '14px',
   color: '#828282',
   fontWeight: 300,
   textWrap: 'nowrap',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
}))

const LastContainer = styled('div')(() => ({
   display: 'flex',
   gap: '22px',
   alignItems: 'center',
}))

const Guests = styled('p')(() => ({
   margin: '0',
   fontWeight: 300,
   color: '#939393',
   fontFamily: 'Inter',
   textWrap: 'nowrap',
}))

const StyledHeartIcon = styled(HeartIcon)(({ like }) => ({
   width: '150px',
   height: '40px',
   cursor: 'pointer',
   transition: '200ms',
   padding: '5px',
   textAlign: 'center',

   border: `${like ? '2px solid #dd8a08' : ''}`,
   borderRadius: '2px',

   '& path': {
      '&:last-child': {
         fill: `${like ? 'DD8A08' : 'none'}`,
      },
   },
}))
