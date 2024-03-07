import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled } from '@mui/material'
import Card from '../../components/UI/card/Card'
import {
   acceptCardRequest,
   applicationRequest,
   deleteCardRequest,
   rejectCardRequest,
} from '../../store/slice/admin/application/applicationThunk'
import Pagination from '../../components/UI/Pagination'
import RejectedModal from '../../components/UI/admin/RejectedModal'
import { AdminNoDataImage } from '../../assets/images'
import LoadingSpinner from '../../components/UI/LoadingSpinner'
import { showToast } from '../../utils/helpers/toast'

const Application = () => {
   const dispatch = useDispatch()
   const { accessToken } = useSelector((state) => state.auth)
   const { houses, totalPages, loading } = useSelector(
      (state) => state.application
   )
   const [isOpen, setIsOpen] = useState(false)
   const [massage, setMassage] = useState('')
   const pageSize = 18
   const [currentPage, setCurrentPage] = useState(1)
   const [houseId, setHouseId] = useState(null)

   const handleChange = (e, value) => {
      setCurrentPage(value)
   }

   useEffect(() => {
      dispatch(applicationRequest({ accessToken, pageSize, currentPage }))
   }, [accessToken, dispatch, currentPage])

   const getData = {
      accessToken,
      pageSize,
      currentPage,
   }

   const sendReject = () => {
      dispatch(rejectCardRequest({ houseId, massage, getData, showToast }))
      setIsOpen((prev) => !prev)
      setMassage('')
   }

   const handleReject = (id) => {
      setIsOpen((prev) => !prev)
      setMassage('')
      setHouseId(id)
   }

   const applicationCardMeatballsOptions = [
      {
         title: 'Accept',
         onClick: (id) =>
            dispatch(acceptCardRequest({ id, getData, showToast })),
      },
      { title: 'Reject', onClick: (id) => handleReject(id) },
      {
         title: 'Delete',
         onClick: (id) =>
            dispatch(deleteCardRequest({ id, getData, showToast })),
      },
   ]

   const handleChangeMassageValue = (e) => setMassage(e.target.value)

   if (loading) {
      return <LoadingSpinner />
   }

   return (
      <StyledContainer>
         <h3 className="heading">APPLICATION</h3>

         <Box className="card-box">
            {houses.length !== 0 ? (
               houses?.map((item) => (
                  <Box key={item.id}>
                     <Card {...item} option={applicationCardMeatballsOptions} />
                  </Box>
               ))
            ) : (
               <Box className="empty-page-box">
                  <img
                     src={AdminNoDataImage}
                     alt="no data"
                     className="noData-imgs"
                  />
               </Box>
            )}
         </Box>

         {houses.length === '0' ? (
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

export default Application

const StyledContainer = styled('div')(({ theme }) => ({
   width: '100%',
   height: '100%',
   minHeight: '88.8vh',
   backgroundColor: theme.palette.primary.white,

   '& .pagination-box': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '1rem',
   },

   '& .card-box': {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: '2rem',
      columnGap: '5rem',
      paddingLeft: '2.5rem',

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

   '& .heading': {
      marginLeft: '2.5rem',
      fontSize: '1.125rem',
      fontWeight: '500',
      padding: ' 1.75rem 0',
      lineHeight: 'normal',
      fontFamily: 'Inter',
   },
}))
