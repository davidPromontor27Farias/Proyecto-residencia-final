import { Box, Grid, Typography } from "@mui/material"
import { AppLayout } from "../Layout/AppLayout"
import { TitleSection } from "../components/TitleSection"


export const IntencionDidactica = () => {
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
              Intencion Didactica
            </TitleSection>

            <Grid component="main">
              
            </Grid>

          </Grid>

          <Grid
            sx={{
              marginTop: 5,
              padding: 6,
              borderRadius: 6,
              backgroundColor: "rgba(244, 243, 243, 0.227)",
              width: '100%',
              boxShadow: '0px 5px 5px rgba(229, 227, 227, 0.485)'
            }}
          >

            <Grid>
              <Typography 
                sx={{
                  color: "white",
                  fontWeight: 'bold',
                  fontSize: 20,
                  textAlign: 'start',
                  
                }}
              component="p"
              >
                En la primera unidad se pretende dar un panorama general de lo que es el lenguaje ensamblador 
                y donde se puede utilizar.
              </Typography> 

              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'end',
                  marginBottom: 5
                }}
              >
                <Box
                  component="img"
                  src='./icons/nanomaquina.png'
                  sx={{
                    
                    width: 200,
                    height: 200
                    
                  }}
                />
              </Grid>


            </Grid>

            <Grid>
        
              <Typography 
                sx={{
                  color: "white",
                  fontWeight: 'bold',
                  fontSize: 20,
                  textAlign: 'end'
                }}
              component="p">
              La segunda unidad se da a conocer las principales instrucciones y funciones del lenguaje ensamblador, la forma de estructurar un programa, los parámetros que se 
              tienen que tomar en cuenta realizando ejemplos sencillos.
              </Typography>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'start',
                  marginBottom: 5
                }}
              >
                <Box
                    component="img"
                    src='./icons/cronologia.png'
                    sx={{
                      
                      width: 200,
                      height: 200
                      
                    }}
                />                
              </Grid>

            </Grid>
            
            <Grid>
        
              <Typography 
                sx={{
                  color: "white",
                  fontWeight: 'bold',
                  fontSize: 20,
                  textAlign: 'start'
                }}
                component="p">
                En la unidad tres el estudiante desarrollará programas en lenguaje ensamblador que haga uso de macros o procedimientos, posteriormente, analizar el funcionamiento interno de los programas desarrollados haciendo el uso del software que
                permita obtener datos estadísticos sobre el funcionamiento de estos.
              </Typography>

              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'end',
                  marginBottom: 5
                }}
              >
                <Box
                    component="img"
                    src='./icons/ingeniero-informatico.png'
                    sx={{
                      
                      width: 200,
                      height: 200
                      
                    }}
                />                
              </Grid>

            </Grid>
            <Grid>
        
              <Typography 
                sx={{
                  color: "white",
                  fontWeight: 'bold',
                  fontSize: 20,
                  textAlign: 'end'
                }}
                component="p">
              En la última unidad el estudiante obtendrá los conocimientos necesarios para la programación de los puertos de la computadora, así como, poder analizar la interfaz de video del buffer en modo texto. En esta unidad se pretende que el estudiante realice una interfaz de hardware, la cual será la base para la creación de las aplicaciones de software, ya que la
               interfaz de hardware será controlada mediante la interfaz de software.
              </Typography>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'sart',
                  alignItems: 'start',
                  marginBottom: 5
                }}
              >
                <Box
                    component="img"
                    src='./icons/interfaz-de-usuario.png'
                    sx={{
                      
                      width: 200,
                      height: 200
                      
                    }}
                />                
              </Grid>

            </Grid>
          </Grid>

          
        </Grid>
       
    </AppLayout>


  )
}

