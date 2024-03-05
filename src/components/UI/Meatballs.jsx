import { Box, IconButton, Menu, MenuItem, styled } from '@mui/material'
import { useState } from 'react'
import { DownArrowIcon, ThreePoint } from '../../assets/icons'

const Meatballs = ({ options, variant = 'dotes', id }) => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)

   const handleClick = (e) => setAnchorEl(e.currentTarget)

   const handleClose = () => setAnchorEl(null)

   const clickHandler = (onClick) => {
      onClick(id)
      handleClose()
   }

   return (
      <Box>
         <StyledIconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
         >
            {variant === 'dotes' ? <ThreePoint /> : <DownArrowIcon />}
         </StyledIconButton>

         <Menu
            id="long-menu"
            MenuListProps={{
               'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
               paper: {
                  style: {
                     maxHeight: 48 * 4.5,
                     width: '12ch',
                  },
               },
            }}
         >
            {options?.map(({ title, onClick }) => (
               <MenuItem key={title} onClick={() => clickHandler(onClick)}>
                  {title}
               </MenuItem>
            ))}
         </Menu>
      </Box>
   )
}

export default Meatballs

const StyledIconButton = styled(IconButton)(() => ({
   widths: 'fit-content',
   padding: '10px',

   '& .MuiIconButton-root': {
      padding: '0',
   },
}))
