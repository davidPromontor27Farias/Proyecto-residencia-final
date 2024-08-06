import { Grid, Typography } from "@mui/material"
import { AppLayout } from "../Layout/AppLayout"
import { themes } from "../notesToShow"
import { TitleSection } from "../components/TitleSection"

export const TemasDesarrollar = () => {
  return (
    <AppLayout>
        <Grid
            container
            spacineg={0}
            direction="column"
            alignItems="center"

            sx={{
        
            minHeight: "100vh",
            borderRadius: 5
            }}
        >
          <Grid
            sx={{
              marginTop: '120px'
            }}
          >

            <TitleSection>
              Temas a Desarrollar
            </TitleSection>
          </Grid>

          <Grid 
            sx={{
              marginTop: 5,
              padding: 6,
              borderRadius: 6,
              backgroundColor: "rgba(244, 243, 243, 0.227)",
              width: '100%',
              boxShadow: '0px 5px 5px rgba(229, 227, 227, 0.485)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
          }}
            component="section">
            {
              themes.map(({description, color}, index) => (

                <Grid
                  key={index+ 1}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.216)',
                    marginTop: 3,
                    padding: 3,
                    borderRadius: 5,
                    color: 'white',
                    position: 'relative',
                    width: '75%'
                  }}
                >
                  <Typography 
                    sx={{
                      fontSize: 20, 
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}
                    component="p">
                    {description}
                  </Typography>
                  <Typography 
                    sx={{
                      position: 'absolute',
                      top: -5,
                      left: -15,
                      fontSize: 20,
                      backgroundColor: color,
                      padding: 3,
                      width: 20,
                      height: 20,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: "center",
                      borderRadius: 5

                    }}
                    component="h2">
                    {index + 1}
                  </Typography>
                </Grid>
              ))
            }
          </Grid>      
        </Grid>
  </AppLayout>
  )
}

