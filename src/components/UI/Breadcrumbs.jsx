import React from 'react'
import { Link, Breadcrumbs as MuiBreadcrumbs, styled } from '@mui/material'

const BreadCrumbs = ({ links }) => {
   const lastIndex = links.length - 1

   return (
      <StyledBreadcrumbs>
         {links.map(({ href, label }, index) =>
            index === lastIndex ? (
               <Link href={href} key={label} sx={{ color: '#222 !important' }}>
                  {label}
               </Link>
            ) : (
               <Link key={label} href={href}>
                  {label}
               </Link>
            )
         )}
      </StyledBreadcrumbs>
   )
}

export default BreadCrumbs

const StyledBreadcrumbs = styled(MuiBreadcrumbs)(() => ({
   margin: '0 0 40px 0',

   '& .MuiTypography-root': {
      color: '#c4c4c4',
   },
}))
