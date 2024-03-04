import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled } from '@mui/material'
import Select from '../../components/UI/Select'
import {
   acceptCardAllHousingRequest,
   deleteCardAllHousingRequest,
   getFilteredHousingRequest,
   rejectCardAllHousingRequest,
} from '../../store/slice/admin/allHousing/allHousingThunk'
import { AdminNoDataImage } from '../../assets/images'
import Card from '../../components/UI/card/Card'
import {
   BOOKIING_FILTER_OPTIONS,
   HOUSE_TYPE_OPTIONS,
   POPULAR_SORT_OPTIONS,
   PRICE_FILTER_OPTIONS,
} from '../../utils/constants/admin/allHousing'
import RejectedModal from '../../components/UI/admin/RejectedModal'
import { showToast } from '../../utils/helpers/toast'
import LoadingSpinner from '../../components/UI/LoadingSpinner'

const AllHousing = () => {
   const { allHouses, loading } = useSelector((state) => state.allHousing)
   const dispatch = useDispatch()

   const [filterOption, setFilterOption] = useState(
      BOOKIING_FILTER_OPTIONS[0]?.value || ''
   )
   const [sortByOption, setSortByOption] = useState(
      POPULAR_SORT_OPTIONS[0]?.value || ''
   )
   const [homeTypeOption, setHomeTypeOption] = useState(
      HOUSE_TYPE_OPTIONS[0]?.value || ''
   )
   const [priceFilterOption, setPriceFilterOption] = useState(
      PRICE_FILTER_OPTIONS[0]?.value || ''
   )
   const [isOpen, setIsOpen] = useState(false)
   const [massage, setMassage] = useState('')
   const [houseId, setHouseId] = useState(null)

   useEffect(() => {
      dispatch(
         getFilteredHousingRequest({
            status: filterOption,
            houseType: homeTypeOption,
            rating: sortByOption,
            price: priceFilterOption,
         })
      )
   }, [dispatch, filterOption, homeTypeOption, sortByOption, priceFilterOption])

   const getData = {
      status: filterOption,
      houseType: homeTypeOption,
      rating: sortByOption,
      price: priceFilterOption,
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
   const handleChangeFilterOptionValue = (e) => setFilterOption(e.target.value)
   const handleChangeSortOptionValue = (e) => setSortByOption(e.target.value)
   const handleChangeHomeTypeValue = (e) => setHomeTypeOption(e.target.value)
   const handleChangePriceOptionValue = (e) =>
      setPriceFilterOption(e.target.value)

   if (loading) {
      return <LoadingSpinner />
   }

   return (
      <StyledContainer>
         <Box className="filter-box">
            <h3 className="heading">ALL HOUSING</h3>

            <Box className="select-box">
               <Select
                  value={filterOption}
                  label="Filter by:"
                  onChange={handleChangeFilterOptionValue}
                  defaultId={1}
                  isValueAsId
                  options={BOOKIING_FILTER_OPTIONS}
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

         <Box className="card-box">
            {allHouses.length !== 0 ? (
               allHouses?.map((item) => (
                  <Box key={item.id}>
                     <Card {...item} option={allHouseCardMeatballsOptions} />
                  </Box>
               ))
            ) : (
               <Box className="empty-page-box">
                  <img
                     src={AdminNoDataImage}
                     alt="no data"
                     className="noData-img"
                  />
               </Box>
            )}
         </Box>

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

export default AllHousing

const StyledContainer = styled('div')(() => ({
   width: '100%',
   height: '100%',
   minHeight: '88.8vh',
   padding: '2.875rem 0rem',
   backgroundColor: '#f7f7f7',

   '& .heading': {
      marginLeft: '3rem',
      fontSize: '1.125rem',
      fontWeight: '500',
      lineHeight: 'normal',
      fontFamily: 'Inter',
   },

   '& .filter-box': {
      display: 'flex',
      height: '2.625rem',
      alignItems: 'center',
   },

   '& .select-box': {
      display: 'flex',
      paddingLeft: '5.75rem',
      gap: '1rem',
   },

   '& .card-box': {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: '2rem',
      columnGap: '5rem',
      paddingLeft: '2.5rem',
      marginTop: '2.5rem',

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
