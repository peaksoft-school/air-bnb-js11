import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   Box,
   FormControl,
   FormGroup,
   MenuItem,
   Select,
   styled,
} from '@mui/material'
import { getAnnouncement } from '../../../store/slice/user/house/houseThunk'
import LoadingSpinner from '../../UI/LoadingSpinner'
import { UserNoDataImage } from '../../../assets/images'
import Card from '../../UI/card/Card'
import Checkbox from '../../UI/Checkbox'
import RadioButton from '../../UI/RadioButton'

const MyAnnouncement = () => {
   const dispatch = useDispatch()
   const { announcement, isLoading } = useSelector((state) => state.houses)

   const [state, setState] = React.useState({
      inWishList: false,
      apartment: false,
      house: false,
      price: 'lowToHigh',
   })
   const [menuOpen, setMenuOpen] = React.useState(false)

   const handleOpen = () => {
      setMenuOpen(true)
   }

   const handleClose = () => {
      setMenuOpen(false)
   }

   const handleChange = (event) => {
      setState({
         ...state,
         [event.target.name]: event.target.checked,
      })
   }

   const handlePriceChange = (event) => {
      setState({
         ...state,
         price: event.target.value,
      })
   }

   useEffect(() => {
      dispatch(getAnnouncement())
   }, [])

   if (isLoading) {
      return <LoadingSpinner />
   }

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

   return (
      <StyledAnnouncement>
         <FormControl component="fieldset" className="form-control">
            <Select open={menuOpen} onClose={handleClose} onOpen={handleOpen}>
               <MenuItem value="">
                  <em>All</em>
               </MenuItem>

               <FormGroup>
                  {checkboxOptions.map((option) => (
                     <Checkbox
                        changeChecked={handleChange}
                        checked={state[option.name]}
                        label={option.label}
                        name={option.name}
                     />
                  ))}
               </FormGroup>

               <RadioButton
                  options={radioOptions}
                  value={state.price}
                  onChange={handlePriceChange}
                  name="price"
               />
            </Select>
         </FormControl>
         {announcement && announcement.length > 0 ? (
            announcement.map((booking) => (
               <Card key={booking.id} {...booking} />
            ))
         ) : (
            <img src={UserNoDataImage} alt="no house" />
         )}
      </StyledAnnouncement>
   )
}

export default MyAnnouncement

const StyledAnnouncement = styled(Box)(() => ({
   display: 'flex',
   gap: '20px',

   '& .form-control': {
      width: '200px',
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
