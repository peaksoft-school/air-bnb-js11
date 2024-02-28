import { TabPanel, TabContext, TabList } from '@mui/lab'
import { Box, Tab, styled } from '@mui/material'
import { useState } from 'react'

const Tabs = ({ tabs }) => {
   const [value, setValue] = useState(tabs[0].label)

   const handleChange = (_, newValue) => setValue(newValue)

   return (
      <StyledTabContainer>
         <TabContext value={value}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
               {tabs.map(({ label }) => (
                  <Tab key={label} label={label} value={label} />
               ))}
            </TabList>
            {tabs.map(({ Component, label }) => (
               <TabPanel key={label} value={label}>
                  {Component}
               </TabPanel>
            ))}
         </TabContext>
      </StyledTabContainer>
   )
}

export default Tabs

const StyledTabContainer = styled(Box)(() => ({
   '& .MuiTabs-flexContainer': {
      borderBottom: '2px solid #c4c4c4',
      justifyContent: 'center',
      gap: '82px',
   },

   '& .MuiTab-root': {
      color: '#363636 !important',
      textTransform: 'capitalize',
      fontSize: '18px',
   },
   '& .MuiTabs-indicator': {
      backgroundColor: '#363636',
   },

   '& .MuiButtonBase-root': {
      padding: '0 16px 12px',
   },
}))
