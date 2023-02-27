// capturamos los elementos con los que vamos a trabajar

const lista = document.querySelector('#lista')
console.log(lista)

// pintar los elementos

function printTasks(pList, pSectionDom) {
    pSectionDom.innerHTML = "";
    pList.forEach(item => printOneTask(item, pSectionDom))
}


function printOneTask(pTask, pSectionDom) {
    const li = document.createElement('li')
    li.classList.add('prioridad')
    li.classList.add(pTask.prioridad)
    const i = document.createElement('i')
    i.classList.add('fa-regular')
    i.classList.add('fa-circle')
    const p = document.createElement('p')
    p.textContent = `${pTask.titulo}`
    const i2 = document.createElement('i')
    i2.classList.add('fa-solid')
    i2.classList.add('fa-burst')
    i2.addEventListener('click', getDelete)


    li.appendChild(i)
    li.appendChild(p)
    li.appendChild(i2)

    pSectionDom.appendChild(li)
}

printTasks(listaTareas, lista)

//evento del formulario de registro  de tareas aqui solo tengo que capturar los datos, la insercion de los datos va en el controlador.

const addTarea = document.querySelector('#addTarea');
addTarea.addEventListener('submit', getTaskRegister);


function getTaskRegister(event) {
    event.preventDefault();
    // tenemos que controlar que el input no este vacio

    if (event.target.titulo.value !== "" && event.target.prioridad.value !== "") {

        const newTask = {
            titulo: event.target.titulo.value,
            prioridad: event.target.prioridad.value,
        }

        /* arrayNuevatarea.push(newTask)
        localStorage.setItem('tarea', JSON.stringify(arrayNuevatarea)) */

        let result = addTask(listaTareas, newTask)
        if (result.status) {
            event.target.reset();
            printOneTask(newTask, lista);
        } else {
            event.target.reset()
            alert(result.msg)
        }
    } else {
        alert('Los campos no pueden estar vacios')
    }
}

// buscador semantico
// capturamos el input

const search = document.querySelector('#search');
search.addEventListener('input', getSearch);

function getSearch(event) {
    let busqueda = event.target.value;
    let listaFiltrada = searchByTask(listaTareas, busqueda);
    printTasks(listaFiltrada, lista)
}

// buscador por selector

const selectFilter = document.querySelector('#select_search');
selectFilter.addEventListener('input', getSelectSearch);

function getSelectSearch(event) {
    if (event.target.value !== "") {
        let busqueda = event.target.value;
        let listaFiltrada = searchByTasks(listaTareas, busqueda)
        printTasks(listaFiltrada, lista)
    } else {
        printTasks(listaTareas, lista)
    }
}

// Borrar tareas

const iconoBorrar = document.querySelectorAll('.fa-solid')
console.log(iconoBorrar)


function getDelete(event) {
    let tarea = event.target.parentNode;
    console.log(event.target.parentNode)
    tarea.parentNode.removeChild(tarea);
} 
