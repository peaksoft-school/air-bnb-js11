import { Box, Typography, styled } from '@mui/material'
import { useRef, useState } from 'react'
import { CameraIcon } from '../../assets/icons'
import RadioButton from '../../components/UI/RadioButton'
import { HOME_TYPE } from '../../utils/constants/user'
import Input from '../../components/UI/Input'

const AddHouse = () => {
   const imageRef = useRef(null)
   const [images, setImages] = useState([])
   const [radioHomeType, setRadioHomeType] = useState(HOME_TYPE[0])
   const [maxGuests, setMaxGuests] = useState(0)
   const [price, setPrice] = useState(0)

   const handleFileChange = (e) => {
      const file = e.target.files[0]

      if (file) {
         const reader = new FileReader()

         reader.onloadend = () => {
            const newImages = [...images, reader.result]
            setImages(newImages)
         }

         reader.readAsDataURL(file)
      }
   }

   const handleClick = () => imageRef.current.click()

   const handleChangeHomeType = (e) => setRadioHomeType(e.target.value)
   const handleChangeMaxGuests = (e) => setMaxGuests(e.target.value)
   const handleChangePrice = (e) => setPrice(e.target.value)

   return (
      <StyledContainer>
         <Box className="box">
            <Typography className="heading">
               Hi! Let&rsquo;s get started listing your place.
            </Typography>

            <Typography className="description">
               In this form, we&rsquo;ll collect some basic and additional
               information about your listing.
            </Typography>

            <Box>
               <Typography className="image-heading">
                  Image <span className="gray-text">Max 4 photo</span>
               </Typography>

               <Box className="images-box">
                  {images?.map((image) => (
                     <img src={image} alt="images" className="added-image" />
                  ))}

                  {images.length === 4 ? (
                     ''
                  ) : (
                     <Box onClick={handleClick} className="add-photo">
                        <CameraIcon />
                        <input
                           ref={imageRef}
                           id="photo"
                           type="file"
                           accept=".png"
                           onChange={handleFileChange}
                           max="4"
                        />
                     </Box>
                  )}

                  {images.length >= 1 ? (
                     ''
                  ) : (
                     <Box className="images-description">
                        <label htmlFor="photo" className="add-photos-text">
                           Add photos to the review
                        </label>
                        <Typography className="add-photos-description">
                           It will become more noticeable and even more useful.
                           You can upload up to 4 photos.
                        </Typography>
                     </Box>
                  )}
               </Box>
            </Box>

            <Box className="form-box">
               <Typography className="label">Home Type</Typography>
               <RadioButton
                  value={radioHomeType}
                  onChange={handleChangeHomeType}
                  options={HOME_TYPE}
                  row
               />
            </Box>

            <Box className="form-box row-box">
               <Box>
                  <Typography className="label">Max of Guests</Typography>
                  <Input
                     type="number"
                     min="1"
                     placeholder="0"
                     className="input-type-number"
                     value={maxGuests}
                     onChange={handleChangeMaxGuests}
                  />
               </Box>

               <Box>
                  <Typography className="label">Price</Typography>
                  <Input
                     type="number"
                     placeholder="$0"
                     className="input-type-number"
                     value={price}
                     onChange={handleChangePrice}
                  />
               </Box>
            </Box>

            <Box className="form-box">
               <Typography className="label">Title</Typography>

               <Input placeholder="Title of House/Apartment" />
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default AddHouse

const StyledContainer = styled(Box)(({ theme }) => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   height: '100%',
   minHeight: '88.8vh',
   backgroundColor: theme.palette.primary.white,
   color: theme.palette.primary.dark,
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: '400',
   lineHeight: '1.188rem',

   '& .box': {
      width: '38.125rem',
   },

   '& .heading': {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: '500',
      lineHeight: '1.188rem',
      marginTop: '2.5rem',
   },

   '& .description': {
      color: theme.palette.tertiary.darkerGray,
      width: '30rem',
      marginTop: '1.25rem',
   },

   '& .image-heading': {
      marginTop: '1.875rem',

      '& .gray-text': {
         marginLeft: '0.5rem',
         color: ' #A9A9A9',
      },
   },

   '& .images-box': {
      display: 'flex',
      marginTop: '0.875rem',
      height: '8.438rem',
      alignItems: 'center',
      gap: '1rem',

      '& .added-image': {
         width: '8.438rem',
         height: '8.438rem',
      },

      '& .add-photo': {
         width: '8.438rem',
         height: '8.438rem',
         backgroundColor: theme.palette.tertiary.lightestGray,
         cursor: 'pointer',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',

         '& #photo': {
            cursor: 'pointer',
            display: 'none',
            width: '8.438rem',
            height: '8.438rem',
         },
      },

      '& .add-photo:hover': {
         border: `1px solid ${theme.palette.tertiary.lightGray}`,
      },

      '& .images-description': {
         width: '23rem',

         '& .add-photos-text': {
            fontFamily: 'Inter',
            fontSize: '1rem',
            fontWeight: '500',
            lineHeight: '1.188rem',
            color: theme.palette.tertiary.blue,
            cursor: 'pointer',
         },

         '& .add-photos-description': {
            fontSize: '0.875rem',
            color: theme.palette.tertiary.middleGray,
            marginTop: '0.5rem',
         },
      },
   },

   '& .row-box': {
      display: 'flex',
      gap: '1.25rem',
   },

   '& .form-box': {
      marginTop: '1.75rem',

      '& .label': {
         marginBottom: '1.125rem',
         fontFamily: 'Inter',
         fontSize: '1rem',
         fontWeight: '500',
         lineHeight: '1.188rem',
      },

      '& .input-type-number': {
         width: '15.313rem',
      },
   },
}))
