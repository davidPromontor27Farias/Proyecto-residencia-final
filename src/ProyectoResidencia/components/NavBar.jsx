
import { Calculate, LogoutOutlined } from '@mui/icons-material'
import { AppBar, Box, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material'
import {Link as LinkRouter} from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'

export const NavBar = ({drawerWidth, showSidebar, setShowSidebar}) => {

    const dispatch = useDispatch();
    

    const onExit = () => {
        
        dispatch(startLogout());
    }


  return (
    <AppBar
        position="fixed"
        sx={{
            width: showSidebar ? {sm: `calc(100% - ${240}px)` } : '100%',
            backgroundColor: '#2874A6', 
            padding: 2
        
        }}

    >
        <Grid
            container
            justifyContent='space-between'
            alignItems='center'
            className="modifyContain" 
        >
            <Grid
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <Box
                    component='img'
                    src='./icons/iconMenuCircle.png'
                    onClick={() => setShowSidebar(true)}
                    sx={{
                        cursor: 'pointer'
                    }}
                />
                <Link 
                    to="/" 
                    component={LinkRouter}
                    sx={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    <Typography>
                        DRAG AND DROP
                    </Typography>     
                </Link>
                

            </Grid>

            


            <Toolbar>
                
                <Grid>

                    <IconButton
                        onClick={onExit}
                        color="error"
                    >
                        <LogoutOutlined/>
                    </IconButton>
                </Grid>
            </Toolbar>

        </Grid>
    </AppBar>
  )
}

