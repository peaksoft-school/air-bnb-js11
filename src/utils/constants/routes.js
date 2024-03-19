export const routes = {
   ADMIN: {
      index: '/admin',
      application: '/admin/application',
      users: '/admin/users',
      user: '/admin/users/:userId',
      userAnnouncement: '/admin/users/:userId/:announcementId',
      allHousing: '/admin/all-housing',
      applicationById: '/admin/application/:applicationId',
   },

   USER: {
      index: '/user',
<<<<<<< HEAD
      addHouse: '/user/add-house',
=======
      favorite: '/user/favorite',
>>>>>>> development
   },
}

export const ROLES = {
   GUEST: 'GUEST',
   USER: 'USER',
   ADMIN: 'ADMIN',
}
