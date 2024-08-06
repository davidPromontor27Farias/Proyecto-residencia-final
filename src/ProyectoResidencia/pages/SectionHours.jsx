import { Button, Grid, Link, TextField } from "@mui/material"
import { AppLayout } from "../Layout/AppLayout"
import { genericCompetencies } from "../notesToShow"
import { TitleSection } from "../components/TitleSection"
import {Link as RouterLink, useLocation}from "react-router-dom"
import { DragAndDropComponent } from "../components/DragAndDropComponent"
import { dragAndDropHook } from "../hooks/dragAndDropHook"
import { onAuthHook } from "../hooks/onAuthHook"
import { useEffect } from "react"
import { useForm } from "../../hooks/useForm"


export const SectionHours = () => {

    const {hours, onInputChange} = useForm();
    const {loadPage, setLoadPage} = onAuthHook();
    const location = useLocation();



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
                }}
                >
               
               <form
                    className='animate__animated animate__fadeIn form-hour'
                   
                >
                    <Grid container
                    
                    >
                        <Grid
                            item 
                            xs={12} 
                            sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            
                            
                        >
                            <label className="hoursActivity">Horas de las actividades:</label>
                            <input className="inputHours" type="number" value={hours} placeholder="Ingrese las horas de la asignatura" onChange={() => onInputChange}/>
                    
                    
                        </Grid>

                        <input type="submit" value="Agregar" className="addHours"/>

                        
                    </Grid>


                </form>
          

                <Link component={RouterLink}
                  to='/deserrallo-de-competencias-genericas'
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



                
                </Grid>

        </AppLayout>

    )
}
