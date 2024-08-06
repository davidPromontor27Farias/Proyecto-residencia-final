import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar"
import { SideBar } from "../components/SideBar";
import { useState } from "react";

const drawerWidth= 240;

export const AppLayout = ({children}) => {

  const [showSidebar,setShowSidebar ] = useState(false);
    
  console.log(showSidebar);
    
  return (
    <Box
        
        sx={{backgroundColor: 'primary.main', 
          width: '100%',
          objectFit: 'cover',
          minHeight: '100vh', display: 'flex'}}
    >
        <NavBar
          drawerWidth={drawerWidth}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <SideBar
          drawerWidth={drawerWidth}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <Box component="main"
          className="animate__animated animate__fadeIn"
          sx={{flexGrow: 1, p: 3}}
          
        >
          {children}
        </Box>
        
 
    </Box>
  )
}
