import { useLocation, useParams } from 'react-router'
import { Box, Typography, styled } from '@mui/material'
import Breadcrumbs from '../../../components/UI/Breadcrumbs'
import { routes } from '../../../utils/constants/routes'
import Tabs from '../../../components/UI/Tabs'
import Bookings from '../../../components/admin/users/booking/Bookings'
import Announcement from '../../../components/admin/users/booking/Announcement'

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
   const { userId } = useParams()
   const { pathname } = useLocation()

   const USER_BREADCRUMBS = [
      {
         label: 'Users',
         href: routes.ADMIN.users,
      },
      {
         label: 'Медер медербеков',
         href: pathname,
      },
   ]

   return (
      <StyledUserContainer>
         <Breadcrumbs links={USER_BREADCRUMBS} />

         <Box className="user-container">
            <Box className="user-name">
               <Typography>Медер медербеков</Typography>
               <Box className="user-card">
                  <Box>
                     <img
                        src="https://avatars.dzeninfra.ru/get-zen_doc/1592246/pub_5e3c84113a37040237bf3a29_5e3c8f373ca31f61b1afe494/scale_1200"
                        alt="user-avatar"
                        className="user-avatar"
                     />
                     <Typography>
                        <span>Name:</span> Медер Медербеков
                     </Typography>
                     <Typography>
                        <span>Contact</span>: mederbekov@gmail.com
                     </Typography>
                  </Box>
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

   '& .user-container': {
      display: 'flex',
      gap: '47px',
      alignItems: 'flex-start',

      '& .user-name': {
         display: 'flex',
         flexDirection: 'column',
         gap: '22px',
      },

      '& .user-card': {
         '& .user-avatar': {
            width: '90px',
            height: '90px',
            objectFit: 'cover',
            borderRadius: '50%',
         },
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
