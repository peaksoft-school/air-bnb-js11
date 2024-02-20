import { useLocation, useParams } from 'react-router'
import { Box, Skeleton, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../../../components/UI/Breadcrumbs'
import { routes } from '../../../utils/constants/routes'
import Tabs from '../../../components/UI/Tabs'
import Bookings from '../../../components/admin/users/booking/Bookings'
import Announcement from '../../../components/admin/users/booking/Announcement'
import { axiosInstance } from '../../../configs/axiosInstance'

const tabs = [
   {
      label: 'Booking',
      Component: <Bookings />,
   },
   {
      label: 'announcement',
      Component: <Announcement />,
   },
]

const UserPage = () => {
   const { pathname } = useLocation()
   const { userId } = useParams()
   const [isLoading, setIsLoading] = useState(false)
   const [user, setUser] = useState({})

   const getUser = async () => {
      setIsLoading(true)
      try {
         const { data } = await axiosInstance.get(`api/users/user/${userId}`)
         setUser(data)
         setIsLoading(false)
      } catch (error) {
         setIsLoading(false)
      }
   }

   useEffect(() => {
      getUser()
   }, [])

   const USER_BREADCRUMBS = [
      {
         label: 'Users',
         href: routes.ADMIN.users,
      },
      {
         label: user?.name,
         href: pathname,
      },
   ]

   return (
      <StyledUserContainer>
         <Breadcrumbs links={USER_BREADCRUMBS} />

         <Box className="user-container">
            <Box className="user-name">
               <Typography>{user?.name}</Typography>
               <Box className="user-card">
                  {isLoading ? (
                     <Box className="skeleton-container">
                        <Skeleton
                           variant="circular"
                           width={90}
                           height={90}
                           className="user-avatar"
                        />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                     </Box>
                  ) : (
                     <Box>
                        <div className="user-avatar">
                           {user.name && user.name[0]}
                        </div>
                        <Typography>
                           <span>Name:</span> {user?.name}
                        </Typography>
                        <Typography>
                           <span>Contact</span>: {user?.email}
                        </Typography>
                     </Box>
                  )}
               </Box>
            </Box>
            <Box className="card-container">
               <Tabs tabs={tabs} />
            </Box>
         </Box>
      </StyledUserContainer>
   )
}

export default UserPage

const StyledUserContainer = styled(Box)(() => ({
   padding: '46px 40px',
   position: 'relative',

   '& .user-container': {
      display: 'flex',
      gap: '47px',
      alignItems: 'flex-start',
      position: 'relative',

      '& .user-name': {
         display: 'flex',
         flexDirection: 'column',
         gap: '22px',
      },

      '& .user-card': {
         '& .skeleton-container': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',

            '& .MuiSkeleton-text': {
               fontSize: '1rem',
               width: '18rem',
            },
         },

         '& .user-avatar': {
            background: '#0298d9',
            padding: '8px 12px',
            borderRadius: '50%',
            color: '#fff',
            cursor: 'pointer',
            width: '90px',
            height: '90px',
            fontSize: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 5px',
         },

         // '& .user-avatar': {
         //    width: '90px',
         //    height: '90px',
         //    objectFit: 'cover',
         //    borderRadius: '50%',
         // },
         '& .MuiTypography-root': {
            '& span': {
               color: '#646464',
            },
         },

         padding: '38px 0',
         border: '1px solid #c4c4c4',
         borderRadius: '12px',
         textAlign: 'center',
         height: '250px',
         width: '420px',
      },
   },
   '& .card-container': {
      width: '100%',
   },
}))