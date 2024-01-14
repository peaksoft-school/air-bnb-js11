import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
   palette: {
      primary: {
         main: '#ffffff',
         dark: '#363636',
         white: '#F7F7F7',
      },
      secondary: {
         main: '#DD8A08',
         green: '#4F7755',
         blackGreen: '#1C2E20',
         lightBrown: '#FFBE58',
      },
      tertiary: {
         main: '#646464',
         lightGreen: '#97C69E',
         middleGray: '#828282',
         darkerGray: '#7D7D7D',
         blue: '#266BD3',
         lightGray: '#C4C4C4',
         lightestGray: '#F3F3F3',
         yellow: '#F7D212',
         lightPink: '#FFF0F6',
         pink: '#FFCBE0',
      },
   },
})

const Themes = ({ children }) => (
   <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Themes
