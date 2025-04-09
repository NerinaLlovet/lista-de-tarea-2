const input = document.getElementById("input-agregar-tarea");
console.log(input);
const mas = document.getElementById ("mas-agregar-tarea");
const lista = document.getElementById ("lista");
const agregarTarea = (tarea) => {
 const elemento = `
 <li class="item" id="item">
          <i class="fas fa-circle co check" id="check" data-="check"></i> 
          <p class="texto">${tarea}</p>
          <i class="fas fa-trash de borrar" id="borrar" data-="borrar"></i> 
        </li>
 
        `
lista.insertAdjacentHTML("beforeend", elemento); 
};


//llamas funcion 
mas.addEventListener(`click`, () => {
const tarea = input.value 
if(tarea) {
    agregarTarea(tarea)
}
input.value = "";

})
document.addEventListener("keyup", (e) => {
  if(e.key == 'Enter') {


const tarea = input.value 
if(tarea) {
    agregarTarea(tarea)
}
input.value = "";
  }
})

const cambiarEstilos = () => {
  const link =document.getElementById("estilos");

  link.href = link.href.includes("style.css") ? "style2.css" : "style.css" ;
} ;

