import { Typography } from '@mui/material'


export const TitleSection = ({children}) => {
  return (
    <Typography
        component='h1'
        sx={{
            color: "white",
            fontSize: '25px',
            textTransform: 'uppercase'
        }}
    >
        {children}
    </Typography> 
  )
}
