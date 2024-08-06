import { Box, Drawer, Grid, Link, Toolbar, Typography } from '@mui/material'
import {Link as LinkRouter} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CaracteristicaAsignatura } from '../pages/CaracteristicaAsignatura'
import { onAuthHook } from '../hooks/onAuthHook'


export const SideBar = ({drawerWidth, showSidebar, setShowSidebar}) => {

    const {displayName, photoUrl} = useSelector(state => state.auth);
    const {loadPage} = onAuthHook();

    
    return (
        <Box
            component="nav"
            sx={{
                transition: '.3s',
                opacity: showSidebar ? 1 : 0,
                display: showSidebar ? 'flex' : 'none',
                width: {sm: drawerWidth},
                flexShrink: {sm: 0},
                minHeight: '100vh'

                
            }}
        >
            <Drawer
                variant='permanent'
                open={true}
            
        
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#2E4053 ',
                        height: '100vh', 

                    }}
                >
                    <Grid
                        container={true}
                        justifyContent='end'
                    >
                        <Box
                            onClick={() => setShowSidebar(false)}
                            component='img'
                            alt='icon-close'
                            src='./icons/icons8-close.svg'
                         
                            sx={{
                                cursor: 'pointer'
                            }}
                            />
                    </Grid>

                    <Toolbar  
                       
                    >
                       
                        <Grid
                            container={true}
                            alignContent='center'
                            justifyContent='center'
                            borderRadius='50'
                        >
                            <Box
                                component="img"
                                alt="imagen de usuario"
                                src={!photoUrl ? './icons/avatar.png' : photoUrl}
                                sx={{
                                    width: '90px'
                                }}
                            
                            />
                            <Typography 
                                variant='h6' 
                                noWrap component="div"
                                sx={{
                                    color: 'white'
                                }}
                            >

                                {displayName}
                            </Typography>

                        </Grid>

                        
                    </Toolbar>

                    <Toolbar>
                        <Grid
                            container
                            alignContent="center"
                          
                            
                        >
                            <Typography
                                sx={{
                                    color:"white",
                                    mt: 10,
                                    mb: 5
                                    
                                }}
                            >
                                Enlaces
                            </Typography>

                            <Link 
                                component={LinkRouter}
                                to='/caracteristicas-de-la-asignatura'
                                
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    paddingBottom: 1,
                                    marginBottom: 2,
                                    alignItems: "center",
                                    borderBottom: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/caracteristicas-asignatura.png"
                                />
                                Caracteristicas de la asignatura
                            </Link>
                            <Link 
                                to="/intencion-didactica"
                                component={LinkRouter}
                            
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    paddingBottom: 1,
                                    marginBottom: 2,
                                    borderBottom: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/intencion-didactica.png"
                                />
                                Intencion didactica
                            </Link>
                            <Link 
                                to='/competencia-de-la-asignatura'
                                component={LinkRouter}
                               
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 2,
                                    paddingBottom: 1,
                                    borderBottom: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/competencia-asignatura.png"
                                />
                                Competencia de la asignatura
                            </Link>
                            <Link 
                                to="/temas-y-subtemas-a-desarrollar"
                                component={LinkRouter}
                                
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 2,
                                    paddingBottom: 1,
                                    borderBottom: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/subtemas-desarrollar.png"
                                />
                                Temas y subtemas a desarrollar
                            </Link>
                            <Link 
                                to={loadPage.activitiesLearning ? '/actividades-de-ensenanza' : loadPage.activitiesGenerics ? '/deserrallo-de-competencias-genericas' : '/actividades-de-aprendizaje-deseadas'}
                                component={LinkRouter}
                              
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 2,
                                    paddingBottom: 1,
                                    borderBottom: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/actividades-aprendizaje.png"
                                />
                                Actividades de aprendizaje deseadas
                            </Link>

                        </Grid>

                        
                    </Toolbar>

                   
                </Box>

            </Drawer>
        
        </Box>
    )
}

