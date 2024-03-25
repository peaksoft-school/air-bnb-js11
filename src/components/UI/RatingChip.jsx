import { Box, Chip, Rating } from '@mui/material'

const RatingChip = ({ ratingValue, onDelete }) => {
   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            border: 1,
            borderColor: 'grey.400',
            borderRadius: '16px',
            p: 0.5,
            bgcolor: 'background.paper',
         }}
      >
         <Rating name="read-only" value={ratingValue} readOnly size="small" />
         <Chip
            onDelete={onDelete}
            sx={{ height: 'auto', m: '2px', width: 'fit-content' }}
         />
      </Box>
   )
}

export default RatingChip
