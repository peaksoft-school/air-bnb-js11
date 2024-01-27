import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { ThreePoint } from '../../assets/icons'

const Meatballs = ({ options }) => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)

   const handleClick = (e) => setAnchorEl(e.currentTarget)

   const handleClose = () => setAnchorEl(null)

   return (
      <Box>
         <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
         >
            <ThreePoint />
         </IconButton>

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
                     width: '20ch',
                  },
               },
            }}
         >
            {options?.map(({ title, key }) => (
               <MenuItem key={key} onClick={handleClose}>
                  {title}
               </MenuItem>
            ))}
         </Menu>
      </Box>
   )
}

export default Meatballs
