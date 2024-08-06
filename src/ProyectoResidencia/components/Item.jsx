import { Grid, Typography } from "@mui/material";

export const Item = ({item, startDrag}) => {

    return (
        <div
            draggable
            className="item-lonely"
            onDragStart={(evt) => startDrag(evt, item)}

        >
            <Typography
                sx={{
                    color: "white",
                    fontSize: "20",
                    fontWeight: 'bold'

                }}
            >
                {
                    item.description
                }
            </Typography>
        </div>
  )
}
