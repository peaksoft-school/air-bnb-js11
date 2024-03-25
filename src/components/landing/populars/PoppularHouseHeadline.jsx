import { Stack, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router'

const PoppularHouseHeadline = () => {
   const navigate = useNavigate()

   const handleClickPopularHouse = () =>
      navigate(`/user/inner-region`, {
         state: { popular: 'ASC', apartment: 'HOUSE' },
      })

   return (
      <StylStackContainer>
         <StyleStackTitle>
            <StyleTypography>Popular House</StyleTypography>
            <StyleTypographyTitle>
               Helping you make the best decisions in buying, selling, & renting
               your last minute locations.
            </StyleTypographyTitle>
         </StyleStackTitle>
         <StyleLinkTypography onClick={handleClickPopularHouse}>
            View all
         </StyleLinkTypography>
      </StylStackContainer>
   )
}

export default PoppularHouseHeadline

const StylStackContainer = styled(Stack)(() => ({
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '78.68rem',
   padding: '0.5rem',
}))

const StyleStackTitle = styled(Stack)(() => ({
   rowGap: '1rem',
   display: 'flex',
   flexDirection: 'column',
}))

const StyleTypographyTitle = styled(Typography)(() => ({
   color: '#363636',
}))

const StyleTypography = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontSize: '20px',
   fontStyle: 'normal',
   color: '#363636',
   fontWeight: 500,
   lineHeight: 'normal',
   textTransform: 'uppercase',
}))

const StyleLinkTypography = styled(Typography)(() => ({
   color: '#363636',
   borderBottom: '1px solid black',
   textDecoration: 'none',
   cursor: 'pointer',
}))
