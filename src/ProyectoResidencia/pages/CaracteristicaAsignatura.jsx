import { Grid, Typography } from "@mui/material"
import { AppLayout } from "../Layout/AppLayout"
import { skills } from "../notesToShow"
import { TitleSection } from "../components/TitleSection"

export const CaracteristicaAsignatura = () => {


  return (
    <AppLayout>
      <Grid
          container
          spacineg={0}
          direction="column"
          alignItems="center"


          sx={{
        
            minHeight: "100vh",
            width: '100%',
            borderRadius: 5
          }}
      >
          <Grid
            sx={{
              marginTop: '120px'
            }}
          >
            <TitleSection>
              Caracteristica de la Asignatura
            </TitleSection> 

          </Grid>

          <Grid

            sx={{
              marginTop: 5,
              padding: 4,
              borderRadius: 6,
              backgroundColor: "rgba(244, 243, 243, 0.227)",
              width: '100%',
              boxShadow: '0px 5px 5px rgba(229, 227, 227, 0.485)'
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 17
              }}
              component="p"
            >
              Esta Asignatura Aporta al Perfil del Ingeniero en Sistemas Computacionales las
              Siguientes Habilidades.
            </Typography>

            
            {
              skills.map( ({description, color}, index) => (
                <Grid
                  key={index}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.216)',
                    marginTop: 3,
                    padding: 3,
                    borderRadius: 5,
                    color: 'white',
                    position: 'relative'

                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold'
                    }}
                  component="p">
                    {description}
                  </Typography>

                  <Typography 
                    component="h3"
                    sx={{
                      position: 'absolute',
                      top: -15,
                      left: -20,
                      backgroundColor: color,
                      padding: 2,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: 20,
                      fontWeight: 'bold'
                    }}
                  >{index + 1}</Typography>
                </Grid>
              ))
            }

            <Typography 
              component='p'
              sx={{
                color: 'white',
                marginTop: 10,
                fontSize: 20
              }}
            >
                La presente asignatura aporta los conocimientos para el diseño e implementación de interfaces hombre-máquina
                y máquina-máquina para la automatización de sistemas. El desarrollo, implementación y administración de software 
                de sistemas o de aplicación que cumpla con los estándares de calidad con el fin de apoyar la productividad y competitividad
                de las organizaciones. Para que desempeñe sus actividades profesionales considerando los aspectos legales, éticos, sociales y
                  de desarrollo sustentable y a la vez le permita poseer las habilidades metodológicas de investigación que fortalezcan el desarrollo cultural,
                científico y tecnológico en el ámbito de sistemas computacionales y disciplinas afines.
            </Typography>
          </Grid>
     
      </Grid>


    </AppLayout>

  )
}
