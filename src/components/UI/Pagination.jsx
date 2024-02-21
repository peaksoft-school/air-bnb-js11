import { Pagination as MuiPagination, styled } from '@mui/material'

const Pagination = ({ count, page, onChange }) => {
   return <StyledPogination count={count} page={page} onChange={onChange} />
}

export default Pagination

const StyledPogination = styled(MuiPagination)(({ theme }) => ({
   '& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected': {
      color: theme.palette.secondary.main,
      backgroundColor: 'rgba(0, 0, 0, 0)',

      '&:hover': {
         backgroundColor: 'rgba(0, 0, 0, 0)',
      },
   },
   '& .MuiButtonBase-root': {
      '&:hover': {
         backgroundColor: 'rgba(0, 0, 0, 0)',
         color: theme.palette.secondary.main,
      },

      '&:focus': {
         color: theme.palette.secondary.main,
      },
      '& svg path': {
         color: theme.palette.secondary.main,
      },
   },
}))
