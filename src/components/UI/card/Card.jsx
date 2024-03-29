import { Box, Typography, styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { FullStarIcon, HeartIcon, LocationIcon } from '../../../assets/icons'
import CardSlider from './CardSlider'
import Meatballs from '../Meatballs'
import { NotFound } from '../../../assets/images'
import { axiosInstance } from '../../../configs/axiosInstance'

const Card = ({
   price,
   rating,
   images,
   title,
   address,
   maxGuests,
   description,
   favorite,
   status,
   newCard,
   option,
   id,
   onNavigate,
   isMyBooking = false,
   isMyAnnouncement = false,
   onModeration = false,
}) => {
   const { role } = useSelector((state) => state.auth)
   const navigate = useNavigate()

   const changeIsLike = async (houseId) => {
      try {
         await axiosInstance.post(`/api/favorites/${houseId}`)

         return 'a'
      } catch (error) {
         return error
      }
   }

   const clickHandler = (e) => {
      e.stopPropagation()

      if (onNavigate) {
         navigate(`${id}`)
      }
   }

   return (
      <CardContainer
         myannouncement={isMyAnnouncement}
         blocked={status}
         newCard={newCard}
         role={role}
      >
         {isMyAnnouncement && status === 'BLOCKED' ? (
            <StyledBlockText>
               Your application has been blocked, please contact the
               administrator
            </StyledBlockText>
         ) : null}

         <CardSlider img={images.length > 0 ? images : [NotFound]} />

         <CardInnerContainer onClick={clickHandler}>
            <PriceRatingInfo>
               <Price>
                  ${price} / <span>day</span>
               </Price>
               <Rating>
                  <FullStarIcon />
                  {rating}
               </Rating>
            </PriceRatingInfo>

            <HouseInfo>
               {title}, {description}
            </HouseInfo>
            <HouseLocation>
               <LocationIcon /> {address}
            </HouseLocation>
            <LastContainer onClick={(e) => e.stopPropagation()}>
               <Guests>{maxGuests} guests</Guests>
               {!onModeration ? (
                  isMyAnnouncement ? (
                     <Meatballs options={option} id={id} />
                  ) : !isMyBooking && role === 'USER' ? (
                     status === 'BLOCKED' ? (
                        <Button disabled>Blocked</Button>
                     ) : (
                        <>
                           <Button>BOOK</Button>
                           <StyledHeartIcon
                              onClick={() => changeIsLike(id)}
                              like={favorite}
                           />
                        </>
                     )
                  ) : !isMyBooking ? (
                     <Meatballs options={option} id={id} />
                  ) : null
               ) : null}
            </LastContainer>
            {isMyBooking ? (
               <CheckContainer>
                  <CheckInfo>
                     <Box>
                        <Typography className="check">Check in</Typography>
                        <Typography>02.02.22</Typography>
                     </Box>
                     <Box>
                        <Typography className="check">Check in</Typography>
                        <Typography>02.02.22</Typography>
                     </Box>
                  </CheckInfo>
                  <Button>Change</Button>
               </CheckContainer>
            ) : null}
         </CardInnerContainer>
      </CardContainer>
   )
}

export default Card

const CardContainer = styled('div')(
   ({ myannouncement, blocked, newCard, role }) => ({
      position: 'relative',
      maxWidth: '300px',
      width: '100%',
      minWidth: '300px',
      backgroundColor: `${myannouncement && blocked === 'BLOCKED' ? '#D4D4D466' : '#f7f7f7'}`,
      opacity: blocked === 'BLOCKED' ? 0.6 : 1,
      borderRadius: '4px',
      transition: '200ms',
      cursor: `${myannouncement && blocked === 'BLOCKED' ? 'default' : 'pointer'}`,
      border: `${role === 'ADMIN' && newCard ? '3px solid red' : ''}`,
      padding: '2px',

      '&:hover': {
         backgroundColor: `${myannouncement && !blocked ? '#fff' : ''}`,
         boxShadow: `${myannouncement && !blocked ? '0px -1px 10px 0px #ecedf2' : ''}`,
      },
   })
)

const StyledBlockText = styled('p')(() => ({
   backgroundColor: '#646464',
   position: 'absolute',
   zIndex: 10,
   opacity: 1,
   top: '100px',
   left: '25.5px',
   width: '250px',
   padding: '10px',
   borderRadius: '5px',
   color: '#fff',
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
   justifyContent: 'space-between',
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

const CheckContainer = styled(Box)(() => ({}))

const CheckInfo = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   margin: '0 0 10px 0',

   '& .check': {
      color: '#646464',
   },
}))
