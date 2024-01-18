import { IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import Card from '../UI/Card'
import { KebabMenuIcon } from '../../assets'

const ApplicationCardItem = ({ el }) => {
   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <Card
         {...el}
         actionElement={
            <>
               <IconButton onClick={handleClick}>
                  <KebabMenuIcon />
               </IconButton>
               <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                     'aria-labelledby': 'basic-button',
                  }}
                  anchorOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                  }}
                  transformOrigin={{
                     vertical: 'center',
                     horizontal: 'right',
                  }}
                  sx={{ minWidth: '180px' }}
                  PaperProps={{
                     style: {
                        minWidth: 180,
                     },
                  }}
               >
                  <MenuItem onClick={handleClose}>Accept</MenuItem>
                  <MenuItem onClick={handleClose}>Reject</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
               </Menu>
            </>
         }
      />
   )
}

export default ApplicationCardItem
