import React, { useState } from 'react'
import { styled } from '@mui/material'
import mansionImg from '../../assets/images/hotel-mansion-img-2.jpg'
import Button from './Button'
import { FullStarIcon, HeartIcon, LocationIcon } from '../../assets'

const Cards = () => {
   const [isLike, setIsLike] = useState(false)

   const changeIsLike = () => {
      setIsLike((prev) => !prev)
   }

   return (
      <CardContainer>
         <CardImg src={mansionImg} alt="" />
         <CardInnerContainer>
            <PriceRatingInfo>
               <Price>
                  $26 / <span>day</span>
               </Price>
               <Rating>
                  <FullStarIcon />
                  3.4
               </Rating>
            </PriceRatingInfo>
            <HouseInfo>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Blanditiis, odio?
            </HouseInfo>
            <HouseLocation>
               <LocationIcon /> 12 Morris Ave, Toronto, ON, CA
            </HouseLocation>
            <LastContainer>
               <Guests>2 guests</Guests>
               <Button>BOOK</Button>
               <StyledHeartIcon onClick={changeIsLike} like={isLike} />
            </LastContainer>
         </CardInnerContainer>
      </CardContainer>
   )
}

export default Cards

const CardContainer = styled('div')(() => ({
   maxWidth: '300px',
   minWidth: '200px',
   backgroundColor: '#f7f7f7',
   borderRadius: '4px',
   transition: '200ms',
   cursor: 'pointer',

   '&:hover': {
      backgroundColor: '#fff',
      boxShadow: '0px -1px 10px 0px #ecedf2',
   },
}))

const CardImg = styled('img')(() => ({
   width: '100%',
   height: '200px',
   objectFit: 'cover',
   borderRadius: '4px 4px 0 0',
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
   fontSize: '14px',
   textWrap: 'nowrap',
}))

const StyledHeartIcon = styled(HeartIcon)(({ like }) => ({
   width: '50px',
   height: '50px',
   cursor: 'pointer',
   transition: '200ms',

   '& path': {
      '&:last-child': {
         fill: `${like ? 'DD8A08' : 'none'}`,
      },
   },
}))
