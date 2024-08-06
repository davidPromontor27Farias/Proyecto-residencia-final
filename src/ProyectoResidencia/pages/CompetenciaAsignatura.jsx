import { Box, Grid, Typography } from "@mui/material"
import { AppLayout } from "../Layout/AppLayout"
import { TitleSection } from "../components/TitleSection"


export  const CompetenciaAsignatura = () => {
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
                marginTop: '120px',
                textAlign: "center"
              }}
            >
              <TitleSection>
                Competencia de la Asignatura
              </TitleSection>

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
              >
                
                <Grid
                  sx={{
                    backgroundColor: '#138D75',
                    padding: 7,
                    borderRadius: 5

                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 20
                    }}
                    component="h2">
                      Desarrollar Software Para Establecer la Interfaz Hombre Maquina y Maquina - Maquina.
                  </Typography>                
                </Grid>
                <Box
                  component="img"
                  src="./icons/desarrollo-web.png"
                  sx={{
                    paddingTop: 4
                  }}
                />
                
              </Grid>  

            </Grid>      
      </Grid>
  
  
    </AppLayout>
    )
  }
  