import { Grid, Typography } from "@mui/material"
import { AppLayout } from "../Layout/AppLayout"
import { TitleSection } from "../components/TitleSection"
import { SideLeft } from "../components/SideLeft"
import { MainComponent } from "../components/MainComponent"

export const MiJournal = () => {
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
                component="main"
                sx={{
                    mt: '120px'
                }}
            >
                <TitleSection>
                    Mi Diario de Clases
                </TitleSection>
                
                <Grid
                 className="section"
                >
                  <SideLeft/>
                  <MainComponent/>
                </Grid>
            </Grid>

        </Grid>
    </AppLayout>
  )
}

