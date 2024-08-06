import { Button } from "@mui/material";

export const ButtonComponent = ({info, setShowTasks, decisition}) => {


    return (
        <Button
            onClick={() => setShowTasks(decisition)}
        sx={{
        fontSize: 15,
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        color: 'white',
        backgroundColor: 'buttonGoogle.main'
        }}
        >
            {info}
    </Button>
  )
}
