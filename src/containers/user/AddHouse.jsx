import { Box, Typography, styled } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { CameraIcon, CloseIcon } from '../../assets/icons'
import RadioButton from '../../components/UI/RadioButton'
import { HOME_TYPE, REGIONS_OPTIONS } from '../../utils/constants/user'
import Input from '../../components/UI/Input'
import Select from '../../components/UI/Select'
import Button from '../../components/UI/Button'
import { validationSchema } from '../../utils/helpers/validate'
import {
   postImageFile,
   saveHouse,
} from '../../store/slice/user/addHouse/addHouseThunk'
import {
   clearImage,
   deleteImage,
} from '../../store/slice/user/addHouse/addHouseSlice'
import { showToast } from '../../utils/helpers/toast'

const AddHouse = () => {
   const imageRef = useRef(null)
   const dispatch = useDispatch()
   const [houseType, setHouseType] = useState(HOME_TYPE[0].value)
   const { images } = useSelector((state) => state.addHouse)

   const handleFileChange = (e) => {
      const file = e.target.files[0]

      if (file) {
         dispatch(postImageFile({ file }))
      }
   }

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   const handleClick = () => imageRef.current.click()
   const handleChangeHomeType = (e) => setHouseType(e.target.value)

   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      reset,
      trigger,
   } = useForm({
      resolver: yupResolver(validationSchema),
   })

   const handleChangeGuests = (e) => {
      const newValue = e.target.value.replace(/\D/g, '')
      setValue('maxOfGuests', newValue)
      trigger('maxOfGuests')
   }

   const handleChangePrice = (e) => {
      const newValue = e.target.value.replace(/\D/g, '')
      setValue('price', newValue)
      trigger('price')
   }

   const handleDeleteImage = (index) => dispatch(deleteImage(index))

   const onSubmit = (data) => {
      if (images.length !== 0) {
         const newData = { ...data, houseType, images }
         dispatch(
            saveHouse({ newData, reset, dispatch, clearImage, showToast })
         )
      } else {
         showToast({
            title: 'Image is required',
            message: 'You need to add at least one image!',
            type: 'error',
         })
      }
   }

   return (
      <StyledContainer>
         <form onSubmit={handleSubmit(onSubmit)} className="box">
            <Typography className="heading">
               Hi! Let&rsquo;s get started listing your place.
            </Typography>

            <Typography className="description">
               In this form, we&rsquo;ll collect some basic and additional
               information about your listing.
            </Typography>

            <Box className="container">
               <Typography className="image-heading">
                  Image <span className="gray-text">Max 4 photo</span>
               </Typography>

               <Box className="images-box">
                  {images?.map((image, index) => (
                     <Box key={image} className="image-container">
                        <img src={image} alt="images" className="added-image" />
                        <CloseIcon
                           className="delete-icon"
                           onClick={() => handleDeleteImage(index)}
                        />
                     </Box>
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

            <Box className="form-box margin">
               <Typography className="label">Home Type</Typography>
               <RadioButton
                  onChange={handleChangeHomeType}
                  value={houseType}
                  options={HOME_TYPE}
                  row
               />
            </Box>

            <Box className="form-box row-box">
               <Box>
                  <Typography className="label">Max of Guests</Typography>
                  <Input
                     type="number"
                     placeholder="0"
                     className="input-type-number"
                     {...register('maxOfGuests')}
                     InputProps={{ inputProps: { min: 0 } }}
                     onChange={handleChangeGuests}
                  />
                  <Typography className="validation">
                     {errors.maxOfGuests ? `${errors.maxOfGuests.message}` : ''}
                  </Typography>
               </Box>

               <Box>
                  <Typography className="label">Price</Typography>
                  <Input
                     type="number"
                     placeholder="$0"
                     className="input-type-number"
                     {...register('price')}
                     InputProps={{ inputProps: { min: 0 } }}
                     onChange={handleChangePrice}
                  />
                  <Typography className="validation">
                     {errors.price ? `${errors.price.message}` : ''}
                  </Typography>
               </Box>
            </Box>

            <Box className="form-box">
               <Typography className="label">Title</Typography>
               <Input
                  placeholder="Title of House/Apartment"
                  className="long-input"
                  {...register('title')}
               />
               <Typography className="validation">
                  {errors.title ? `${errors.title.message}` : ''}
               </Typography>
            </Box>

            <Box className="form-box">
               <Typography className="label">Description of listing</Typography>
               <Box className="input-box">
                  <Input
                     placeholder="Write Description of listing"
                     className="description-input"
                     multiline
                     {...register('description')}
                  />
               </Box>
               <Typography className="validation">
                  {errors.description ? `${errors.description.message}` : ''}
               </Typography>
            </Box>

            <Box className="form-box">
               <Typography className="label">Region</Typography>
               <Select
                  label="Please, select the region"
                  defaultId={1}
                  isValueAsId
                  options={REGIONS_OPTIONS}
                  className="long-input region"
                  {...register('region')}
               />
               <Typography className="validation">
                  {errors.region ? `${errors.region.message}` : ''}
               </Typography>
            </Box>

            <Box className="form-box">
               <Typography className="label">Town / Province</Typography>
               <Input
                  placeholder="Town or Province"
                  className="long-input"
                  {...register('province')}
               />
               <Typography className="validation">
                  {errors.province ? `${errors.province.message}` : ''}
               </Typography>
            </Box>

            <Box className="form-box">
               <Typography className="label">Address</Typography>
               <Input
                  placeholder="The exact address"
                  className="long-input"
                  {...register('address')}
               />
               <Typography className="validation">
                  {errors.address ? `${errors.address.message}` : ''}
               </Typography>
            </Box>

            <Box className="button-box">
               <Button className="submit-button" type="submit">
                  SUBMIT
               </Button>
            </Box>
         </form>
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

   '& .container': {
      marginBottom: '1.75rem',
   },

   '& .image-container': {
      width: '8.438rem',
      height: '8.438rem',
      position: 'relative',

      '& .delete-icon': {
         position: 'absolute',
         top: '0.2rem',
         display: 'none',
         right: '0.2rem',
         cursor: 'pointer',
         width: '1.5rem',
         height: '1.5rem',

         '& path': {
            fill: 'black',
         },
      },

      '&:hover': {
         '& .delete-icon': {
            display: 'block',
         },
      },
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
      position: 'relative',

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

   '& .submit-button': {
      width: '12.25rem',
      height: '2.313rem',
   },

   '& .button-box': {
      width: '38.125rem',
      height: '2.313rem',
      marginTop: '1.375rem',
      marginBottom: '10.625rem',
      display: 'flex',
      justifyContent: 'flex-end',
   },

   '& .margin': {
      marginBottom: '1.75rem',
   },

   '& .form-box': {
      '& .validation': {
         color: 'red',
         fontSize: '0.75rem',
         height: '0.75rem',
         marginBottom: '1rem',
      },

      '& .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button': {
         display: 'none',
      },

      '& .region': {
         backgroundColor: theme.palette.primary.main,
      },

      '& .input-box': {
         height: '6.6rem',
      },

      '& .label': {
         marginBottom: '1.125rem',
         fontFamily: 'Inter',
         fontSize: '1rem',
         fontWeight: '500',
         lineHeight: '1.188rem',
      },

      '& .input-type-number': {
         width: '15.313rem',
         height: '2.438rem',
      },

      '& .long-input': {
         width: '38.125rem',
         height: '2.438rem',
      },

      '& .description-input': {
         width: '38.125rem',
         border: '1px solid gray',

         '&:hover': {
            border: '2px solid #828282',
         },

         '&:focus-within': {
            border: '2px solid #828282',
         },

         '& .MuiInputBase-root.MuiOutlinedInput-root': {
            minHeight: '6.5rem',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'flex-start',
            height: '6.5rem',
            overflowY: 'auto',
         },

         '& .MuiOutlinedInput-root': {
            '& fieldset': {
               border: 'none',
            },

            '&:hover fieldset': {
               border: 'none',
            },
         },

         '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
               border: 'none',
            },
      },
   },
}))
