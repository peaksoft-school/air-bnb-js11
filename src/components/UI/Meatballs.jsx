import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import { ThreePoint } from '../../assets/icons'

const ITEM_HEIGHT = 48

const Meatballs = ({ options }) => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)

   const handleClick = (e) => setAnchorEl(e.currentTarget)

   const handleClose = () => setAnchorEl(null)

   return (
      <div>
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
            PaperProps={{
               style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
               },
            }}
         >
            {options?.map(({ title, key }) => (
               <MenuItem key={key} onClick={handleClose}>
                  {title}
               </MenuItem>
            ))}
         </Menu>
      </div>
   )
}

export default Meatballs
