import { Grid, Link } from "@mui/material"
import { AppLayout } from "../Layout/AppLayout"
import { DragAndDropComponent } from "../components/DragAndDropComponent"
import { TitleSection } from "../components/TitleSection"
import { teachingActivities } from "../notesToShow"
import { Link as RouterLink, useLocation } from "react-router-dom"
import { onAuthHook } from "../hooks/onAuthHook"
import { useEffect } from "react"



export const TeachingActivities = () => {
    
    const {loadPage, setLoadPage} = onAuthHook();
    const location = useLocation();


    useEffect(() => {
      if(location.pathname === '/actividades-de-ensenanza'){
        setLoadPage({
          activitiesLearning: true,
          activitiesGenerics: false,
          activitiesLiked: false

        })
      }


    }, [])



  



    return (
        <AppLayout>
            <Grid
              container
              spacineg={0}
              sx={{
                width: "100%",
                minHeight: "100vh",
                display: 'grid',
                placeItems: 'center',
                marginTop: "100px",
                position: 'relative'
              }}
            >
              <Grid
                sx={{
                  marginBottom: '-120px'
                }}
              >
                <TitleSection>
                  Actividades de Eneseñanza
                </TitleSection>
    
             </Grid>
    
         
                <DragAndDropComponent
                infoTasks={['Actividades de enseñanza', 'Actividades de enseñanza deseadas']}
                tasksToShow={teachingActivities}
                />   

                <Link component={RouterLink}
                  to='/actividades-de-aprendizaje-deseadas'
                  sx={{
                    backgroundColor: ' #A10C80;;',
                    position: 'fixed',
                    bottom: '20px',
                    left: '280px',
                    padding: '5px 10px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: 'white'

                  }}
              >
                Regresar
              </Link>     

               <Link component={RouterLink}
                  to='/deserrallo-de-competencias-genericas'
                  sx={{
                    backgroundColor: ' #FF9E44;',
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    padding: '5px 10px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: 'white'

                  }}
              >
                Siguiente
              </Link>          
           
            </Grid>
    

        </AppLayout>
    
    )
}

