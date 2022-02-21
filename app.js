console.log("cristian es al mas bonito❤")

const fragment = document.createDocumentFragment();
const input = document.getElementById('input')
const formulario =document.getElementById('formulario');
const listaTarea = document.getElementById('list-tareas');
const template = document.getElementById('template').content;

let tareas = {}

//console.log(Date.now())


formulario.addEventListener('submit', e => {
    e.preventDefault();
    //value sirve para capturar un elemento 
    console.log (input.value);

    setTarea(e)
})
const setTarea = e =>{
    if (input.value.trim() === ''){
        console.log('esta vacio')
        return
    } 
    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false
    }
    tareas[tarea.id]=tarea
    console.log(tareas)
    //cada ves que le demos agregar que va a limpiiar el input
    formulario.reset()
    //focus surve para que el input se quede selecionado sin necesidad de darle clic para escribir en el
    input.focus()
    pintarTareas()
}
const pintarTareas= () =>{
    listaTarea.innerHTML = ''
    Object.values(tareas).forEach(tarea =>{
        console.log(tarea)
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto
        fragment.appendChild(clone)
    })
    listaTarea.appendChild(fragment)
}