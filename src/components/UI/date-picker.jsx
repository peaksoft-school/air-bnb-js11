import 'dayjs/locale/ru'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker as Calendar } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { styled, useTheme } from '@mui/material'
import { CalendarIcon } from '../../assets/icons'

dayjs.locale('ru')

const DatePicker = ({
   label,
   value,
   onChange,
   defaultValue,
   shouldDisableDate,
   ...rest
}) => {
   const theme = useTheme()
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
         <DemoContainer components={['DatePicker']}>
            <StyledCalendar
               value={value}
               onChange={onChange}
               defaultValue={defaultValue}
               label={label}
               views={['day']}
               format="DD/MM/YY"
               shouldDisableDate={shouldDisableDate}
               {...rest}
               slots={{ openPickerIcon: CalendarIcon }}
               slotProps={{
                  desktopPaper: {
                     sx: {
                        '.MuiPickersDay-root:focus.Mui-selected': {
                           background: theme.palette.secondary.main,
                           color: theme.palette.primary.main,
                        },

                        '.css-kg9q0s-MuiButtonBase-root-MuiIconButton-root-MuiPickersArrowSwitcher-button':
                           {
                              position: 'absolute',
                              left: '0.70rem',
                           },

                        '.MuiPickersCalendarHeader-labelContainer': {
                           marginLeft: '5.9rem',
                           fontSize: ' 0.875rem',
                           fontWeight: ' 500',
                           lineHeight: ' 1.5rem',
                           letterSpacing: '0.00625rem',
                           '& ::first-letter': {
                              textTransform: 'uppercase',
                           },
                        },
                     },
                  },
               }}
            />
         </DemoContainer>
      </LocalizationProvider>
   )
}

export default DatePicker

const StyledCalendar = styled(Calendar)(() => ({
   width: '15rem',
}))
