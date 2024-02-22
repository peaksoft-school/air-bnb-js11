import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import Card from '../UI/card/Card'
import Modal from '../UI/Modal'
import {
   acceptCardRequest,
   applicationRequest,
   deleteCardRequest,
   rejectCardRequest,
} from '../../store/slice/admin/application/applicationThunk'
import Pagination from '../UI/Pagination'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { Yurt } from '../../assets/images'

const Application = () => {
   const dispatch = useDispatch()
   const { accessToken } = useSelector((state) => state.auth)
   const { houses, totalPages } = useSelector((state) => state.application)
   const [isOpen, setIsOpen] = useState(false)
   const [massage, setMassage] = useState('')
   const pageSize = 18
   const [currentPage, setCurrentPage] = useState(1)
   const [houseId, setHouseId] = useState(null)

   const handleChange = (event, value) => {
      setCurrentPage(value)
   }

   useEffect(() => {
      dispatch(applicationRequest({ accessToken, pageSize, currentPage }))
   }, [accessToken, dispatch, currentPage])

   const sendReject = () => {
      dispatch(rejectCardRequest({ houseId, massage }))
      setIsOpen((prev) => !prev)
      setMassage('')
   }

   const handleReject = (id) => {
      setIsOpen((prev) => !prev)
      setMassage('')
      setHouseId(id)
   }

   const applicationCardMeatballsOptions = [
      { title: 'Accept', onClick: (id) => dispatch(acceptCardRequest(id)) },
      { title: 'Reject', onClick: (id) => handleReject(id) },
      { title: 'Delete', onClick: (id) => dispatch(deleteCardRequest(id)) },
   ]

   const handleChangeMassageValue = (e) => setMassage(e.target.value)

   return (
      <StyledContainer>
         <h3 className="heading">APPLICATION</h3>
         <Box className="card-box">
            {houses.length !== '0' ? (
               houses?.map((item) => (
                  <Box key={item.id}>
                     <Card {...item} option={applicationCardMeatballsOptions} />
                  </Box>
               ))
            ) : (
               <Box className="empty-page-box">
                  <img src={Yurt} alt="yurt" className="yurt-img" />
                  <Typography className="empty-text">
                     This page is empty!
                  </Typography>
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

         <StyledModal open={isOpen} onClose={() => setIsOpen(false)}>
            <Box className="container">
               <h3 className="modal-heading">REJECT</h3>
               <StyledInput
                  multiline
                  placeholder="Write the reason for your rejection "
                  value={massage}
                  onChange={handleChangeMassageValue}
               />
               <Box className="button-box">
                  <Button
                     onClick={handleReject}
                     variant="cancel"
                     className="cansel-button"
                  >
                     CANSEL
                  </Button>
                  <Button onClick={sendReject} className="send-button">
                     SEND
                  </Button>
               </Box>
            </Box>
         </StyledModal>
      </StyledContainer>
   )
}

export default Application

const StyledContainer = styled('div')(() => ({
   width: '100%',
   height: '100%',
   minHeight: '88.8vh',
   backgroundColor: '#f7f7f7',

   '& .pagination-box': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3.75rem',
   },

   '& .card-box': {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'space-around',

      '& .empty-page-box': {
         width: '100%',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',

         '& .yurt-img': {
            width: '50rem',
            height: '30rem',
         },

         '& .empty-text': {
            fontFamily: 'Inter',
            fontSize: '1.125rem',
            fontWeight: '500',
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

const StyledInput = styled(Input)(() => ({
   width: '25.875rem',
   marginTop: '1.5625rem',
   marginBottom: '1.875rem',
   padding: '10px, 8px, 10px, 16px',

   '& .MuiInputBase-root.MuiOutlinedInput-root': {
      minHeight: '6.5rem',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'flex-start',
   },
}))

const StyledModal = styled(Modal)(() => ({
   '& .box': {
      width: '29.625rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '& .container': {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',

         '& .modal-heading': {
            marginTop: '1.5625rem',
            fontFamily: 'Inter',
            fontSize: '1.125rem',
            fontWeight: '500',
         },
      },

      '& .button-box': {
         width: '100%',
         height: '2.3125rem',
         display: 'flex',
         justifyContent: 'flex-end',
         alignItems: 'center',
         gap: '0.5rem',

         '& .send-button': {
            width: '12.25rem',
            height: '2.3125rem',
         },

         '& .cansel-button': {
            width: '9.375rem',
            height: '2.0625rem',
            borderRadius: '0px',
         },
      },
   },
}))
