import { useEffect, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Chip, styled, Typography } from '@mui/material'
import { useLocation } from 'react-router'
import Select from '../../../components/UI/Select'
import {
   acceptCardAllHousingRequest,
   deleteCardAllHousingRequest,
   rejectCardAllHousingRequest,
} from '../../../store/slice/admin/allHousing/allHousingThunk'
import { UserNoDataImage } from '../../../assets/images'
import Card from '../../../components/UI/card/Card'
import {
   REGION_SORT_OPTIONS,
   HOUSE_TYPE_OPTIONS,
   POPULAR_SORT_OPTIONS,
   PRICE_FILTER_OPTIONS,
} from '../../../utils/constants/user/AllRegion'
import RejectedModal from '../../../components/UI/admin/RejectedModal'
import { showToast } from '../../../utils/helpers/toast'
import LoadingSpinner from '../../../components/UI/LoadingSpinner'
import { getUserThunk } from '../../../store/slice/user/userInner/userInnerRegionThunk'
import Pagination from '../../../components/UI/Pagination'

const UserInnerRegion = () => {
   const { regionsHouse, totalPages, loading } = useSelector(
      (state) => state.regionsHouses
   )
   const { state } = useLocation()

   const dispatch = useDispatch()
   const [sortOption, setSortOption] = useState(
      REGION_SORT_OPTIONS[0]?.value ||
         state?.region?.toUpperCase()?.replace(/-/g, '_') ||
         ''
   )
   const [sortByOption, setSortByOption] = useState(
      POPULAR_SORT_OPTIONS[0]?.value || '' || state?.popular
   )
   const [homeTypeOption, setHomeTypeOption] = useState(
      HOUSE_TYPE_OPTIONS[0]?.value || '' || state?.apartment
   )
   const [priceFilterOption, setPriceFilterOption] = useState(
      PRICE_FILTER_OPTIONS[0]?.value || ''
   )

   const pageSize = 16
   const [isOpen, setIsOpen] = useState(false)
   const [massage, setMassage] = useState('')
   const [houseId, setHouseId] = useState(null)
   const [currentPage, setCurrentPage] = useState(1)

   useEffect(() => {
      dispatch(
         getUserThunk({
            region: sortOption,
            houseType: homeTypeOption,
            rating: sortByOption,
            price: priceFilterOption,
            currentPage,
            pageSize,
         })
      )
   }, [
      dispatch,
      sortOption,
      homeTypeOption,
      sortByOption,
      priceFilterOption,
      currentPage,
   ])

   const getData = {
      region: sortOption,
      houseType: homeTypeOption,
      rating: sortByOption,
      price: priceFilterOption,
   }
   const handleChange = (e, value) => {
      setCurrentPage(value)
   }

   const sendReject = () => {
      dispatch(
         rejectCardAllHousingRequest({
            houseId,
            massage,
            getData,
            showToast,
         })
      )

      setIsOpen((prev) => !prev)
      setMassage('')
   }

   const handleReject = (id) => {
      setIsOpen((prev) => !prev)
      setMassage('')
      setHouseId(id)
   }

   const allHouseCardMeatballsOptions = [
      {
         title: 'Accept',
         onClick: (id) =>
            dispatch(acceptCardAllHousingRequest({ id, getData, showToast })),
      },
      { title: 'Reject', onClick: (id) => handleReject(id) },
      {
         title: 'Delete',
         onClick: (id) =>
            dispatch(deleteCardAllHousingRequest({ id, getData, showToast })),
      },
   ]

   const handleChangeMassageValue = (e) => setMassage(e.target.value)
   const handleChangeSortsOptionValue = (e) => setSortOption(e.target.value)
   const handleChangeSortOptionValue = (e) => setSortByOption(e.target.value)
   const handleChangeHomeTypeValue = (e) => setHomeTypeOption(e.target.value)
   const handleChangePriceOptionValue = (e) =>
      setPriceFilterOption(e.target.value)

   if (loading) {
      return <LoadingSpinner />
   }
   const handleDelete = (key) => {
      switch (key) {
         case 0:
            setSortOption('')
            break
         case 1:
            setSortByOption('')
            break
         case 2:
            setHomeTypeOption('')
            break
         case 3:
            setPriceFilterOption('')
            break
         default:
            break
      }
   }

   const handleClearAll = () => {
      setSortOption('')
      setSortByOption('')
      setHomeTypeOption('')
      setPriceFilterOption('')
   }

   return (
      <StyledContainer>
         <Box>
            <Typography className="box">
               Main{' '}
               <span className="path-naryn">
                  /{' '}
                  {state.region?.replace(/\b\w/g, (firstLetter) =>
                     firstLetter?.toUpperCase()
                  )}
               </span>
            </Typography>

            <Box className="select-box">
               <h3 className="heading"> {state.region?.toUpperCase()}</h3>

               <Select
                  className="select-style"
                  value={sortOption}
                  label="Sort by:"
                  onChange={handleChangeSortsOptionValue}
                  defaultId={1}
                  isValueAsId
                  options={REGION_SORT_OPTIONS}
               />

               <Select
                  value={sortByOption}
                  label="Sort by:"
                  onChange={handleChangeSortOptionValue}
                  defaultId={1}
                  isValueAsId
                  options={POPULAR_SORT_OPTIONS}
               />

               <Select
                  value={homeTypeOption}
                  label="Filter by home type:"
                  onChange={handleChangeHomeTypeValue}
                  defaultId={1}
                  isValueAsId
                  options={HOUSE_TYPE_OPTIONS}
               />

               <Select
                  value={priceFilterOption}
                  label="Filter by price:"
                  onChange={handleChangePriceOptionValue}
                  defaultId={1}
                  isValueAsId
                  options={PRICE_FILTER_OPTIONS}
               />
            </Box>
         </Box>

         <Box className="chip-box">
            {sortOption !== '' && (
               <Chip
                  label={sortOption
                     ?.toLowerCase()
                     .replace(/_/g, '-')
                     .replace(/\b\w/g, (firstLetter) =>
                        firstLetter.toUpperCase()
                     )}
                  onDelete={() => handleDelete(0)}
                  className="chip"
               />
            )}

            {sortByOption !== '' && (
               <Chip
                  label={sortByOption === 'ASC' ? 'Popular' : 'The lastes'}
                  onDelete={() => handleDelete(1)}
                  className="chip"
               />
            )}

            {homeTypeOption !== '' && (
               <Chip
                  label={homeTypeOption
                     ?.toLowerCase()
                     .replace(/\b\w/g, (firstLetter) =>
                        firstLetter.toUpperCase()
                     )}
                  onDelete={() => handleDelete(2)}
                  className="chip"
               />
            )}

            {priceFilterOption !== '' && (
               <Chip
                  label={priceFilterOption
                     .toLowerCase()
                     .replace(/\b\w/g, (firstLetter) =>
                        firstLetter.toUpperCase()
                     )}
                  onDelete={() => handleDelete(3)}
                  className="chip"
               />
            )}

            {sortOption !== '' ||
            priceFilterOption !== '' ||
            sortByOption !== '' ||
            homeTypeOption !== '' ? (
               <Typography onClick={handleClearAll} className="claer-all">
                  Clear all
               </Typography>
            ) : (
               ''
            )}
         </Box>

         <Box className="card-box">
            {regionsHouse?.length !== 0 ? (
               regionsHouse?.map((item) => (
                  <Box key={item.id}>
                     <Card
                        onNavigate
                        {...item}
                        option={allHouseCardMeatballsOptions}
                     />
                  </Box>
               ))
            ) : (
               <Box className="empty-page-box">
                  <img
                     src={UserNoDataImage}
                     alt="no data"
                     className="noData-img"
                  />
               </Box>
            )}
         </Box>

         {regionsHouse.length === 0 ? (
            ''
         ) : (
            <Box className="pagination-box">
               <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handleChange}
               />
            </Box>
         )}

         <RejectedModal
            isOpen={isOpen}
            onClose={handleReject}
            value={massage}
            onChange={handleChangeMassageValue}
            sendRequest={sendReject}
         />
      </StyledContainer>
   )
}
export default UserInnerRegion

const StyledContainer = styled('div')(({ theme }) => ({
   width: '100%',
   height: '100%',
   minHeight: '88.8vh',
   backgroundColor: theme.palette.primary.white,
   fontFamily: 'Inter',

   '& .box': {
      fontSize: '1rem',
      fontWeight: '500',
      lineHeight: 'normal',
      fontFamily: 'Inter',
      color: 'gray',
      padding: '0 0 0 2.50rem',
      paddingTop: '2.5rem',

      '& .path-naryn': {
         color: 'black',
      },
   },

   '& .pagination-box': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '1rem',
      paddingBottom: '7rem',
   },

   '& .chip-box': {
      display: 'flex',
      gap: '1rem',
      height: '2.188rem',
      alignItems: 'center',
      marginTop: '1rem',
      padding: '0 0 0 2.50rem',
      marginBottom: '-2rem',
      fontSize: '1rem',
      fontWeight: ' 400',
      lineHeight: '1.21rem',

      '& .chip': {
         borderRadius: '0px',
         padding: '0.5rem',
         height: '2.188rem',
         backgroundColor: theme.palette.tertiary.lightestGray,
         color: theme.palette.tertiary.middleGray,
      },

      '& .chip:nth-of-type(2), .chip:nth-of-type(4)': {
         backgroundColor: theme.palette.tertiary.lightGray,
         color: theme.palette.primary.white,
      },
   },

   '& .claer-all': {
      fontSize: '1rem',
      fontWeight: ' 400',
      lineHeight: '1.21rem',
      color: theme.palette.tertiary.middleGray,
      borderBottom: `1px solid ${theme.palette.tertiary.middleGray}`,
      cursor: 'pointer',
   },

   '& .heading': {
      fontSize: '1.125rem',
      fontWeight: '500',
      lineHeight: 'normal',
      fontFamily: 'Inter',
      display: 'flex',
      alignItems: 'center',
   },

   '& .select-box': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      paddingLeft: '10rem',
      gap: '1.50rem',
      marginTop: '1rem',
      padding: '0 0 0 2.50rem',
   },

   '& .card-box': {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: '2rem',
      columnGap: '5rem',
      paddingLeft: '2.5rem',
      marginTop: '3rem',

      '& .empty-page-box': {
         width: '100%',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',

         '& .noData-img': {
            width: '30rem',
            height: '30rem',
         },
      },
   },
}))
