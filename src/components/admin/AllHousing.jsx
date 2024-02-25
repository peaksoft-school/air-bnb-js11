import { Box, styled } from '@mui/system'
import React, { useState } from 'react'
import Select from '../UI/Select'

const AllHousing = () => {
   const [selectedOption, setSelectedOption] = useState('')

   const handleSelectChange = (e) => {
      setSelectedOption(e.target.value)
      console.log(e.target.value)
   }

   const options = [
      { id: 1, value: 'Option 1' },
      { id: 2, value: 'Option 2' },
      { id: 3, value: 'Option 3' },
   ]
   return (
      <StyledContainer>
         <Box className="filter-box">
            <h3 className="heading">ALL HOUSING</h3>
            <Box className="select-box">
               <Select
                  label="Select an Option"
                  onChange={handleSelectChange}
                  defaultId={1}
                  isValueAsId={false}
                  options={options}
               />
               <Select
                  label="Select an Option"
                  onChange={handleSelectChange}
                  defaultId={1}
                  isValueAsId={false}
                  options={options}
               />
               <Select
                  label="Select an Option"
                  onChange={handleSelectChange}
                  defaultId={1}
                  isValueAsId={false}
                  options={options}
               />
               <Select
                  label="Select an Option"
                  onChange={handleSelectChange}
                  defaultId={1}
                  isValueAsId={false}
                  options={options}
               />
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default AllHousing

const StyledContainer = styled('div')(() => ({
   width: '100%',
   height: '100%',
   minHeight: '88.8vh',
   padding: '2.875rem 0rem',
   backgroundColor: '#f7f7f7',

   '& .heading': {
      marginLeft: '3rem',
      fontSize: '1.125rem',
      fontWeight: '500',
      lineHeight: 'normal',
      fontFamily: 'Inter',
   },

   '& .filter-box': {
      display: 'flex',
      height: '2.625rem',
      alignItems: 'center',
   },

   '& .select-box': {
      display: 'flex',
      paddingLeft: '5.75rem',
      gap: '1rem',
   },
}))
