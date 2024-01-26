import 'dayjs/locale/ru'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker as Calendar } from '@mui/x-date-pickers/DatePicker'
import { styled, useTheme } from '@mui/material'
import { CalendarIcon } from '../../assets/icons'

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

                        '.MuiPickersArrowSwitcher-root': {
                           width: '100%',
                           display: 'flex',
                           justifyContent: 'space-between',
                        },

                        '.MuiPickersCalendarHeader-root ': {
                           paddingLeft: '12px',
                        },

                        '.MuiPickersCalendarHeader-labelContainer': {
                           position: 'absolute',
                           left: '7.5rem',
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
