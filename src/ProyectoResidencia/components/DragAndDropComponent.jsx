import { Button } from "@mui/material";
import { dragAndDropHook } from "../hooks/dragAndDropHook";
import { Item } from "./Item";


export const DragAndDropComponent = ({infoTasks, tasksToShow}) => {

    const {getList, startDrag, dragginOver, onDrop} = dragAndDropHook({tasksToShow});
    return (
        <div
            className="drag-and-drop"
        >
            <div
            component="div"
            className="column column-1"
            >
            <h3 className="title-1">{infoTasks[0]}</h3>
            <div
                className="dd-zone"
                droppable='true'
                onDragOver={(evt => dragginOver(evt))}
                onDrop={(e => onDrop(e, 1))}

            >
                {
                getList(1).map( item => (
                    <Item
                    startDrag={startDrag}
                    key={item.id}
                    item={item}
                    />
                ))
                }
            </div>
            </div>
            <div
            component="div"
            className="column column-2"
            >
            <h3 className="title-2">{infoTasks[1]}</h3>
                <div
                    className="dd-zone"
                    droppable='true'
                    onDragOver={(evt => dragginOver(evt))}
                    onDrop={(e => onDrop(e, 2))}

                >
                    {
                    getList(2).map( item => (
                        <Item
                        startDrag={startDrag}
                        key={item.id}
                        item={item}
                        />
                    ))
                    }
                </div>
            </div>


        </div>
    )
}

