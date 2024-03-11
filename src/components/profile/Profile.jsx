import { useLocation, useParams } from 'react-router'
import { Box, Skeleton, Typography, styled } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { routes } from '../../utils/constants/routes'
import Tabs from '../UI/Tabs'
import Bookings from '../admin/users/profile/Bookings'
import BreadCrumbs from '../UI/BreadCrumbs'
import Announcement from '../admin/users/profile/Announcement'
import { getUser } from '../../store/slice/admin/user/userThunk'
import MyBookings from '../user/profile/MyBookings'
import MyAnnouncement from '../user/profile/MyAnnouncement'
import OnModeration from '../user/profile/OnModeration'
import Button from '../UI/Button'
import { logout } from '../../store/slice/auth/authSlice'
import { showToast } from '../../utils/helpers/toast'

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

const profileTabs = [
   {
      label: 'Bookings',
      Component: <MyBookings />,
   },
   {
      label: 'my announcement',
      Component: <MyAnnouncement />,
   },
   {
      label: 'on moderation',
      Component: <OnModeration />,
   },
]

const Profile = () => {
   const dispatch = useDispatch()
   const { pathname } = useLocation()
   const { userId } = useParams()
   const { user, isLoading } = useSelector((state) => state.userInfo)
   const { role } = useSelector((state) => state.auth)
   const { name, email } = useSelector((state) => state.user)

   useEffect(() => {
      dispatch(getUser(userId))
   }, [])

   const ADMIN_BREADCRUMBS = [
      {
         label: 'Users',
         href: routes.ADMIN.users,
      },
      {
         label: user?.name,
         href: pathname,
      },
   ]

   const USER_BREADCRUMBS = [
      {
         label: 'Main',
         href: routes.USER.index,
      },
      {
         label: 'Profile',
         href: routes.USER.index,
      },
   ]

   const logOutHandler = () => {
      dispatch(logout({ showToast }))
   }

   return (
      <StyledUserContainer>
         <BreadCrumbs
            links={role === 'ADMIN' ? ADMIN_BREADCRUMBS : USER_BREADCRUMBS}
         />

         <Box className="user-container">
            <Box className="user-name">
               <Typography>
                  {role === 'ADMIN' ? user?.name : 'Profile'}
               </Typography>
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
                     <Box className="user-card-info">
                        <div className="user-avatar">
                           {role === 'ADMIN'
                              ? user.name && user.name[0]
                              : name[0]}
                        </div>
                        <Typography>
                           <span>Name:</span>{' '}
                           {role === 'ADMIN' ? user?.name : name}
                        </Typography>
                        <Typography>
                           <span>Contact</span>:{' '}
                           {role === 'ADMIN' ? user?.email : email}
                        </Typography>
                        <Button
                           variant="cancel"
                           className="logout"
                           onClick={logOutHandler}
                        >
                           log out
                        </Button>
                     </Box>
                  )}
               </Box>
            </Box>
            <Box className="card-container">
               <Tabs tabs={role === 'ADMIN' ? tabs : profileTabs} />
            </Box>
         </Box>
      </StyledUserContainer>
   )
}

export default Profile

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
         '& .user-card-info': {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',

            '& .logout': {
               color: '#f00',
               textAlign: 'start',
               margin: '0 0 0 40px',
               width: 'fit-content',
            },
         },

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
         height: 'fit-content',
         width: '420px',
      },
   },
   '& .card-container': {
      width: '100%',
   },
}))
