import React from 'react'
import { makeStyles } from '@mui/material'

const useStyles = makeStyles((theme) => ({
   root: {
      height: '100vh', // Вы можете настроить высоту под ваши требования
      backgroundImage: 'url("/path/to/your/image.jpg")',
      backgroundSize: 'cover', // Заполняет всю высоту и ширину контейнера
      backgroundPosition: 'center', // Позиция изображения по центру
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   content: {
      padding: theme.spacing(2),
   },
}))

const BackgroundImageComponent = () => {
   const classes = useStyles()

   return (
      <Paper className={classes.root}>
         {/* Ваш контент или компоненты здесь */}
         <div className={classes.content}>
            <h1>Your Content Goes Here</h1>
         </div>
      </Paper>
   )
}

export default BackgroundImageComponent
