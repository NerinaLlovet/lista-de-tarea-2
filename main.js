const input = document.getElementById("input-agregar-tarea");
console.log(input);
const mas = document.getElementById ("mas-agregar-tarea");
const lista = document.getElementById ("lista");

const hecho = 'fa-check-circle';
const pendiente = 'fa-circle';
const tachado = 'tachado';

const agregarTarea = (tarea,check) => {
  const estado = check ? hecho : pendiente ;
  const tachar = check ? tachado : "" ;


 const elemento = `
 <li class="item" id="item">
          <i class="far ${estado} check " id="check" data="check"></i> 
          <p class="texto ${tachar}">${tarea}</p>
          <i class="fas fa-trash de borrar" id="borrar" data="borrar"></i> 
        </li>
 
        `
lista.insertAdjacentHTML("beforeend", elemento); 
};


const tareaRealizada = (element) => {
  element.classList.toggle(hecho);
  element.clasList.toggle(pendiente);
  element.parentNode.querySelector('.tarea').classList.toggle(tachado);
};


const cambiarEstilos = () => {
  const link =document.getElementById("estilos");

  link.href = link.href.includes("style.css") ? "style2.css" : "style.css" ;
} ;


const tareaEliminada = (element) => {
  element.parentNode.parentNode.removeChild(element.parentNode);
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


lista.addEventListener('click',function(event){
  const element = event.target;
  const elementData  =element.atributes.data.value;
  if (elementData == 'check'){
    tareaRealizada(element)
  }
  else if (elementData == 'borrar'){
    tareaEliminada(element)
  }
});
