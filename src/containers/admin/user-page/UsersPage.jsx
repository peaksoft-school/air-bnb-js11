import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
   styled,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import IconButton from '../../../components/UI/IconButton'
import { BasketIcon } from '../../../assets/icons'
import { axiosInstance } from '../../../configs/axiosInstance'
import LoadingSpinner from '../../../components/UI/LoadingSpinner'
import { showToast } from '../../../utils/helpers/toast'

const UsersPage = () => {
   const [users, setUsers] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [error, setError] = useState(null)
   const navigate = useNavigate()

   const getAllUsers = async () => {
      setIsLoading(true)
      try {
         const { data } = await axiosInstance.get('api/admin/users')
         setUsers(data)
         setError(null)
      } catch (error) {
         setError(error.response.data)
         showToast({
            title: 'Error',
            message: error.response.data,
            type: 'error',
         })
      } finally {
         setIsLoading(false)
      }
   }

   const deleteUser = async (id) => {
      setIsLoading(true)
      try {
         await axiosInstance.delete(`api/users/${id}`)

         showToast({
            title: 'Success',
            message: 'User successfully deleted',
            type: 'success',
         })

         getAllUsers()
      } catch (error) {
         showToast({
            title: 'Error',
            message: error.response?.message,
            type: 'error',
         })
      } finally {
         setIsLoading(false)
      }
   }

   useEffect(() => {
      getAllUsers()
   }, [])

   const handleNavigate = (id) => {
      navigate(`${id}`)
   }

   if (isLoading) {
      return <LoadingSpinner />
   }

   if (error) {
      return <Typography sx={{ color: 'red' }}>Error: {error}</Typography>
   }

   return (
      <StyledContainer>
         <Typography>Users</Typography>
         {users.length > 0 ? (
            <TableContainer>
               <Table>
                  <TableHead>
                     <TableRow>
                        <TableCell>№</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>Bookings</TableCell>
                        <TableCell>Announcement</TableCell>
                        <TableCell>Action</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {users.map(
                        (
                           {
                              id,
                              username,
                              contact,
                              bookingsQuantity,
                              housesQuantity,
                           },
                           i
                        ) => (
                           <TableRow key={id}>
                              <TableCell>{i + 1}</TableCell>
                              <TableCell onClick={() => handleNavigate(id)}>
                                 {username}
                              </TableCell>
                              <TableCell onClick={() => handleNavigate(id)}>
                                 {contact}
                              </TableCell>
                              <TableCell>{bookingsQuantity}</TableCell>
                              <TableCell>{housesQuantity}</TableCell>
                              <TableCell>
                                 <IconButton onClick={() => deleteUser(id)}>
                                    <BasketIcon />
                                 </IconButton>
                              </TableCell>
                           </TableRow>
                        )
                     )}
                  </TableBody>
               </Table>
            </TableContainer>
         ) : (
            <p className="not-found">There are no users yet</p>
         )}
      </StyledContainer>
   )
}

export default UsersPage

const StyledContainer = styled(TableContainer)(() => ({
   padding: '50px 40px',

   '.MuiTypography-root': {
      margin: '0 0 20px 0',
      fontSize: '20px',
      textTransform: 'uppercase',
      fontWeight: '500',
   },

   '& .MuiTableCell-root': {
      padding: '10px',
      border: 'none',
   },

   '& .MuiTableHead-root': {
      backgroundColor: '#646464',

      '& .MuiTableCell-root': {
         color: '#fff',
      },
   },

   '& .MuiTableBody-root': {
      '& .MuiTableRow-root:nth-of-type(odd)': {
         backgroundColor: '#f3f3f3',
      },

      '& .MuiTableRow-root:hover': {
         backgroundColor: '#d8d8d8',
         cursor: 'pointer',
      },
      '& .MuiTableCell-root:last-child': {
         '.MuiIconButton-root': {
            position: 'relative',
            zIndex: '100',
         },
      },
   },

   '& .not-found': {
      fontSize: '30px',
      textAlign: 'center',
   },
}))
