// capturamos los elementos con los que vamos a trabajar

const lista = document.querySelector('#lista')
console.log(lista)

// pintar los elementos

function printTasks(pList, pSectionDom) {
    pSectionDom.innerHTML = "";
    pList.forEach(item => printOneTask(item, pSectionDom))
}

{/* < ul >
    <li class="prioridad">
        <i class="fa-regular fa-circle"></i>
        <p>Hacer tarea</p>
        <i class="fa-solid fa-burst"></i>
    </li>
</ul > */}

function printOneTask(pTask, pSectionDom) {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.classList.add('prioridad')

    pSectionDom.innerHTML += `<i class="fa-regular fa-circle"></i>
                              <p>${pTask.titulo}</p>
                              <i class="fa-solid fa-burst"></i>`

    ul.appendChild(li)
    pSectionDom.appendChild(ul)
}

printTasks(listaTareas, lista)