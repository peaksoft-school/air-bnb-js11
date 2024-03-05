export const routes = {
   ADMIN: {
      index: '/admin',
      application: '/admin/application',
      users: '/admin/users',
      user: '/admin/users/:userId',
      allHousing: '/admin/all-housing',
      applicationById: '/admin/application/:applicationId',
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
