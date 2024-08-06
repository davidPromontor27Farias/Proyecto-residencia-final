import { Button, Grid, Link, Typography } from "@mui/material"
import {Link as RouterLink, useLocation} from 'react-router-dom';
import { AppLayout } from "../Layout/AppLayout"
import { learnings } from "../notesToShow"
import { useEffect, useState } from "react"
import { Item } from "../components/Item"
import { dragAndDropHook } from "../hooks/dragAndDropHook"
import { DragAndDropComponent } from "../components/DragAndDropComponent"
import { TitleSection } from "../components/TitleSection"
import { onAuthHook } from "../hooks/onAuthHook";

export const ActividadesDeAprendizajeDeseadas = () => {

  const {loadPage, setLoadPage} = onAuthHook();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/actividades-de-aprendizaje-deseadas'){
      setLoadPage({
        activitiesLiked: true,
        activitiesLearning: false,
        activitiesGenerics: false,
        
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
            marginTop: "120px"
          }}
        >
          <Grid
          >
            <TitleSection>
              Actividades de Aprendizaje
            </TitleSection>

        </Grid>
          <DragAndDropComponent
            infoTasks={['Actividades de aprendizaje', 'Actividades de aprendizaje deseadas']}
            tasksToShow={learnings}
          /> 

          <Link component={RouterLink}
            to='/actividades-de-ensenanza'
            sx={{
              backgroundColor: ' #FF9E44;',
              position: 'fixed',
              right: '20px',
              bottom: '20px',
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
