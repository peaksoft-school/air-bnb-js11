import { Link, Stack, Typography, styled } from '@mui/material'

const PoppularHouseHeadline = () => {
   return (
      <StylStackContainer>
         <StyleStackTitle>
            <StyleTypography>Popular House</StyleTypography>
            <StyleTypographyTitle>
               Helping you make the best decisions in buying, selling, & renting
               your last minute locations.
            </StyleTypographyTitle>
         </StyleStackTitle>
         <StyleLinkTypography component={Link} href="#">
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
