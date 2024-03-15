import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   Box,
   Checkbox,
   Chip,
   FormControl,
   InputLabel,
   ListItemText,
   MenuItem,
   Rating,
   Select,
   Stack,
   styled,
} from '@mui/material'
import { getAnnouncement } from '../../../store/slice/user/house/houseThunk'
import LoadingSpinner from '../../UI/LoadingSpinner'
import { UserNoDataImage } from '../../../assets/images'
import Card from '../../UI/card/Card'
import RadioButton from '../../UI/RadioButton'

const radioOptions = [
   {
      value: 'lowToHigh',
      label: 'Low to high',
   },
   {
      value: 'highToLow',
      label: 'High to low',
   },
]

const checkboxOptions = [
   {
      name: 'inWishList',
      label: 'In wish list',
   },
   {
      name: 'apartment',
      label: 'Apartment',
   },
   {
      name: 'house',
      label: 'House',
   },
]

const ratingOption = [
   {
      rating: 1,
   },
   {
      rating: 2,
   },
   {
      rating: 3,
   },
   {
      rating: 4,
   },
   {
      rating: 5,
   },
]

const MyAnnouncement = () => {
   const dispatch = useDispatch()
   const { announcement, isLoading } = useSelector((state) => state.houses)

   const [sortMenuOpen, setSortMenuOpen] = useState(false)
   const [sortByRatingMenuOpen, setSortByRatingMenuOpen] = useState(false)
   const [ratingState, setRatingState] = useState('')
   const [sortState, setSortState] = useState([])
   const [filterState, setFilterState] = useState({
      inWishList: false,
      apartment: false,
      house: false,
      price: '',
   })

   const [filterChips, setFilterChips] = useState([])

   console.log(filterChips)

   useEffect(() => {
      dispatch(getAnnouncement())
   }, [dispatch])

   const handleSortMenuToggle = () => {
      setSortMenuOpen((prev) => !prev)
   }

   const handleSortByRatingMenuToggle = () => {
      setSortByRatingMenuOpen((prev) => !prev)
   }

   const handleSortChange = (event) => {
      const {
         target: { value },
      } = event
      setSortState(typeof value === 'string' ? value.split(',') : value)
   }

   const handlePriceChange = (event) => {
      setFilterState((prev) => ({
         ...prev,
         price: event.target.value,
      }))
   }

   const handleRatingChange = (event) => {
      setRatingState(event.target.value)
   }

   useEffect(() => {
      const newChips = []

      sortState.forEach((option) => {
         newChips.push({ key: option, label: option })
      })

      if (filterState.price !== 'lowToHigh') {
         const selectedSortOption = radioOptions.find(
            (option) => option.value === filterState.price
         )
         newChips.push({ key: 'price', label: selectedSortOption?.label })
      }

      if (ratingState) {
         newChips.push({ key: 'rating', label: `Rating: ${ratingState}` })
      }

      setFilterChips(newChips)
   }, [filterState, ratingState, sortState])

   console.log(sortState)

   const handleDelete = (chipToDelete) => () => {
      if (chipToDelete === 'rating') {
         setRatingState('')
      } else {
         setFilterState((prev) => ({
            ...prev,
            [chipToDelete]: false,
         }))
      }
   }

   if (isLoading) {
      return <LoadingSpinner />
   }
   return (
      <StyledAnnouncement>
         {announcement && !announcement.length > 0 ? (
            <>
               <FormControl className="form-control">
                  <InputLabel id="sort">Sort</InputLabel>
                  <Select
                     multiple
                     open={sortMenuOpen}
                     onClose={handleSortMenuToggle}
                     onOpen={handleSortMenuToggle}
                     onChange={handleSortChange}
                     value={sortState}
                     labelId="sort"
                     renderValue={(selected) => selected.join(', ')}
                     label="sort"
                  >
                     <MenuItem value="All">All</MenuItem>
                     {checkboxOptions.map((option) => (
                        <MenuItem key={option.name} value={option.label}>
                           <Checkbox
                              color="warning"
                              checked={sortState.indexOf(option.label) > -1}
                           />
                           <ListItemText primary={option.label} />
                        </MenuItem>
                     ))}
                     <RadioButton
                        options={radioOptions}
                        value={filterState.price}
                        onChange={handlePriceChange}
                        name="price"
                     />
                  </Select>
               </FormControl>
               <FormControl className="form-control">
                  <InputLabel id="sortByRatings">Sort by ratings</InputLabel>

                  <Select
                     open={sortByRatingMenuOpen}
                     onClose={handleSortByRatingMenuToggle}
                     onOpen={handleSortByRatingMenuToggle}
                     labelId="sortByRatings"
                     label="Sort by ratings"
                     value={ratingState}
                     onChange={handleRatingChange}
                  >
                     <MenuItem value="">All</MenuItem>
                     {ratingOption.map(({ rating }) => (
                        <MenuItem key={rating} value={rating}>
                           <Rating value={rating} readOnly />
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
               <Box>
                  <Stack direction="row" spacing={1}>
                     {filterChips.map((chip) => (
                        <Chip
                           key={chip.key}
                           label={chip.label}
                           onDelete={handleDelete(chip.key)}
                        />
                     ))}
                  </Stack>
               </Box>
               {announcement.map((booking) => (
                  <Card key={booking.id} {...booking} />
               ))}
            </>
         ) : (
            <img src={UserNoDataImage} alt="no house" />
         )}
      </StyledAnnouncement>
   )
}

export default MyAnnouncement

const StyledAnnouncement = styled(Box)(() => ({
   gap: '20px',

   '& .MuiSelect-select': {
      height: '20px',
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
}))
