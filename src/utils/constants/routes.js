export const routes = {
   ADMIN: {
      index: '/admin',
      application: '/admin/application',
      users: '/admin/users',
      user: '/admin/users/:userId',
      userAnnouncement: '/admin/users/:userId/:announcementId',
      allHousing: '/admin/all-housing',
   },

   USER: {
      index: '/user',
   },
}

export const ROLES = {
   GUEST: 'GUEST',
   USER: 'USER',
   ADMIN: 'ADMIN',
}
