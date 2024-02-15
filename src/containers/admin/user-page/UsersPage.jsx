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

const UsersPage = () => {
   const [users, setUsers] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [error, setError] = useState(null)
   const navigate = useNavigate()

   const getAllUsers = async () => {
      setIsLoading(true)
      try {
         const { data } = await axiosInstance.get('api/users')
         setUsers(data)
         setIsLoading(false)
         setError(null)
      } catch (error) {
         setIsLoading(false)
         setError(error.response.data)
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
                        <TableRow key={id} onClick={() => handleNavigate(id)}>
                           <TableCell>{i + 1}</TableCell>
                           <TableCell>{username}</TableCell>
                           <TableCell>{contact}</TableCell>
                           <TableCell>{bookingsQuantity}</TableCell>
                           <TableCell>{housesQuantity}</TableCell>
                           <TableCell>
                              <IconButton>
                                 <BasketIcon />
                              </IconButton>
                           </TableCell>
                        </TableRow>
                     )
                  )}
               </TableBody>
            </Table>
         </TableContainer>
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
   },
}))
