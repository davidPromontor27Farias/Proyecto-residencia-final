
import { useEffect, useState } from "react";

/*

    El problema que tengo es que no he podido aya la solucion para 
    el momento de que elimine una tarea o actividad que la regrese a su lugar
    me la saque de las actividades deseadas, al igual lo quiero implementar con localstorage
    par al final mostrar el resumen de actividades seleccionadas.
*/

 export const dragAndDropHook = ({tasksToShow = []}) => {

    const [tasks, setTasks ] = useState(tasksToShow);
    const [tasksRequired, setTaskRequired] = useState(JSON.parse(localStorage.getItem('tasksRequiered')) || []);

    useEffect(() => {
        localStorage.setItem('tasksRequiered', JSON.stringify(tasksRequired));
    }, [tasksRequired])



    const getList = (list) => {
        return tasksToShow.filter(item => item.list === list);
    }

    const startDrag = (evt, item) => {
        evt.dataTransfer.setData('itemID', item.id);
    }




    const dragginOver = (e) => {
        e.preventDefault();

    
    }

    const onDrop = (evt, list) => {
        const itemID = evt.dataTransfer.getData('itemID');
        const item = tasks.find(item => item.id == itemID);
        item.list = list
        //cambiamos el list
        const newState = tasks.map(task => {
        
          if(task.id === item.id) {

                setTaskRequired([...tasksRequired, item]);

            return item;
          }
          else if(task.list == 2){
            const deletedTask = tasksRequired.filter( task => task.list !== 1)
            setTaskRequired(deletedTask);
          }
          
          return task;
        });

     
        
       
    }

    


    


    
  
    return{

        tasks,
        setTasks,
        getList,
        startDrag,
        dragginOver,
        onDrop,

    }
}

