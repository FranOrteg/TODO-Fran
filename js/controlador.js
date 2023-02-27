// funcion añadir tareas, tiene que recibir una lista de tareas y una nueva tarea , y devolvera un objeto.
/* const arrayNuevatarea = []; */

function addTask(pTaskList, pTask) {
    // hay que comprobar si la tarea existe en la base de datos
    let existe = pTaskList.some(tarea => tarea.titulo === pTask.titulo)
    if (!existe) {
        pTask.id_tarea = id_tarea;
        pTaskList.push(pTask);
        id_tarea++;
        console.log(pTaskList)
        return { status: true, msg: "" }
    } else {
        return { status: false, msg: "Tarea duplicada" }
    }
}


// funcion de busqueda semantica

function searchByTask(pList, pPalabra) {
    return pList.filter(task => task.titulo.toLowerCase().includes(pPalabra.toLowerCase()))
}

// funcion de busqueda de selector

function searchByTasks(pList, pSeleccion) {
    return pList.filter(task => task.prioridad === pSeleccion)
}

// borrrar

