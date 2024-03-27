import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Chip, Stack, styled } from '@mui/material'
import LoadingSpinner from '../../UI/LoadingSpinner'
import { UserNoDataImage } from '../../../assets/images'
import {
   deleteAnnouncement,
   getAnnouncement,
} from '../../../store/slice/user/house/houseThunk'
import Select from '../../UI/Select'
import Card from '../../UI/card/Card'

const radioOptions = [
   {
      id: 1,
      value: '',
      label: 'All',
   },
   {
      id: 2,
      value: 'LOW_TO_HIGH',
      label: 'Low to high',
   },
   {
      id: 3,
      value: 'HIGH_TO_LOW',
      label: 'High to low',
   },
]

const houseTypeOptions = [
   {
      id: 1,
      value: '',
      label: 'All',
   },
   {
      id: 2,
      value: 'INWISHLIST',
      label: 'In wish list',
   },
   {
      id: 3,
      value: 'APARTMENT',
      label: 'Apartment',
   },
   {
      id: 4,
      value: 'HOUSE',
      label: 'House',
   },
]

const ratingOption = [
   {
      id: 1,
      value: '',
      label: 'All',
   },
   {
      value: 1,
      id: 2,
   },
   {
      value: 2,
      id: 3,
   },
   {
      value: 3,
      id: 4,
   },
   {
      value: 4,
      id: 5,
   },
   {
      value: 5,
      id: 6,
   },
]

const MyAnnouncement = () => {
   const dispatch = useDispatch()
   const { announcement, isLoading } = useSelector((state) => state.houses)
   const [houseType, setHouseType] = useState('')
   const [rating, setRating] = useState('')
   const [price, setPrice] = useState('')

   const [filterChips, setFilterChips] = useState([])

   useEffect(() => {
      dispatch(
         getAnnouncement({
            houseType,
            rating,
            price,
         })
      )
   }, [rating, houseType, price])

   const handleChipDelete = (chipToDelete) => {
      setFilterChips((chips) =>
         chips.filter((chip) => chip.key !== chipToDelete)
      )
      if (chipToDelete === 'houseType') setHouseType('')
      else if (chipToDelete === 'rating') setRating('')
      else if (chipToDelete === 'price') setPrice('')
   }

   const updateFilterChips = (key, value, label) => {
      setFilterChips((chips) => {
         const existingChipIndex = chips.findIndex((chip) => chip.key === key)
         if (value === '') {
            handleChipDelete(key)
         }
         if (existingChipIndex >= 0) {
            const updatedChips = [...chips]
            updatedChips[existingChipIndex] = {
               key,
               value,
               label: `${label}: ${value}`,
            }
            return updatedChips
         }
         return [...chips, { key, value, label: `${label}: ${value}` }]
      })
   }

   const handleHouseTypeChange = (e) => {
      setHouseType(e.target.value)
      updateFilterChips('houseType', e.target.value, 'House Type')
   }

   const handleRatingChange = (e) => {
      setRating(e.target.value)
      updateFilterChips('rating', e.target.value, 'Rating')
   }

   const handlePriceChange = (e) => {
      setPrice(e.target.value)
      updateFilterChips('price', e.target.value, 'Price')
   }

   const announcementOptions = [
      {
         title: 'Edit',
         onClick: () => {},
      },
      {
         title: 'Delete',
         onClick: (id) => dispatch(deleteAnnouncement(id)),
      },
   ]

   return (
      <StyledAnnouncement>
         <Box className="select-container">
            <Select
               options={houseTypeOptions}
               defaultId={1}
               onChange={handleHouseTypeChange}
               value={houseType}
               isValueAsId
               label="House type:"
            />
            <Select
               options={ratingOption}
               defaultId={1}
               onChange={handleRatingChange}
               isValueAsId
               label="Rating:"
               isRating
            />
            <Select
               options={radioOptions}
               defaultId={1}
               onChange={handlePriceChange}
               isValueAsId
               label="Sort:"
            />
         </Box>

         <Box>
            <Stack direction="row" spacing={1}>
               {filterChips.map((chip) => (
                  <Chip
                     key={chip.key}
                     label={chip.label}
                     onDelete={() => handleChipDelete(chip.key)}
                  />
               ))}
            </Stack>
         </Box>

         {isLoading ? (
            <LoadingSpinner />
         ) : announcement && announcement.length > 0 ? (
            <Box className="card-container">
               {announcement.map((booking) => (
                  <Card
                     key={booking.id}
                     isMyAnnouncement
                     option={announcementOptions}
                     onNavigate
                     {...booking}
                  />
               ))}
            </Box>
         ) : (
            <img src={UserNoDataImage} alt="no house" />
         )}
      </StyledAnnouncement>
   )
}

export default MyAnnouncement

const StyledAnnouncement = styled(Box)(() => ({
   gap: '20px',

   '& .select-container': {
      display: 'flex',
      gap: '10px',
      margin: '0 0 15px 0',
      flexWrap: 'wrap',
   },

   '& .MuiSelect-select': {
      height: '30px !important',
   },

   '& .form-control': {
      width: '270px',
      margin: '0 10px 16px 0',

      '& .Mui-focused': {
         color: '#222',
      },

      '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
         border: '1px solid #484850',
      },
   },

   '& > p': {
      fontSize: '30px',
      margin: '0 auto',
   },

   '& > img': {
      width: '500px',
      margin: '0 auto',
   },

   '& .card-container': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      margin: '20px 0 0 0',
   },
}))
