import { Button, Grid, Link } from "@mui/material"
import { AppLayout } from "../Layout/AppLayout"
import { genericCompetencies } from "../notesToShow"
import { TitleSection } from "../components/TitleSection"
import {Link as RouterLink, useLocation}from "react-router-dom"
import { DragAndDropComponent } from "../components/DragAndDropComponent"
import { dragAndDropHook } from "../hooks/dragAndDropHook"
import { onAuthHook } from "../hooks/onAuthHook"
import { useEffect } from "react"


export const GenericCompetencies = () => {

    const {loadPage, setLoadPage} = onAuthHook();
    const location = useLocation();


    useEffect(() => {
      if(location.pathname === '/deserrallo-de-competencias-genericas'){
        setLoadPage({
          activitiesGenerics: true,
          activitiesLearning: false,
          activitiesLiked: false
        })
      }


    }, [])

    console.log(loadPage);
 

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
                    marginTop: "120px"
                }}
                >
                <Grid
                >
                    <TitleSection>
                        Competencias Genericas
                    </TitleSection>

                </Grid>
                <DragAndDropComponent
                    infoTasks={['Competencias Genericas', 'Competencias Genericas Deseadas']}
                    tasksToShow={genericCompetencies}
                /> 

                <Link component={RouterLink}
                  to='/actividades-de-ensenanza'
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
                  to='/asignar-horas'
                  sx={{
                    backgroundColor: ' #FF9E44;',
                    position: 'fixed',
                    bottom: '20px',
                    right: '28px',
                    padding: '5px 10px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: 'white'

                  }}
                >
                    Asignar Horas
                </Link>  

            
                </Grid>

        </AppLayout>

    )
}
