const fecha=document.getElementById("fecha");
const input = document.getElementById("input-agregar-tarea");
console.log(input);
const mas = document.getElementById ("mas-agregar-tarea");
const lista = document.getElementById ("lista");

const hecho = 'fa-check-circle';
const pendiente = 'fa-circle';
const tachado = 'tachado';

let id =0; 
let LIST= [];

const fechaActual = new Date();
fecha.innerHTML= fechaActual.toLocaleDateString('es-AR',{
weekday:'long',
month:'long',
day:'numeric'
});

const agregarTarea = (tarea,check,eliminado,id) => {
if(eliminado){return}
  const estado = check ? hecho : pendiente ;
  const tachar = check ? tachado : "" ;



 const elemento = `
 <li class="item">
          <i class="far ${estado} check " id="${id}" data="check"></i> 
          <p class="tarea ${tachar}">${tarea}</p>
          <i class="fas fa-trash de borrar" id="${id}" data="borrar"></i> 
        </li>
 
        `
lista.insertAdjacentHTML("beforeend", elemento); 
};


const tareaRealizada = (element) => {
  element.classList.toggle(hecho);
  element.classList.toggle(pendiente);
  element.parentNode.querySelector('.tarea').classList.toggle(tachado);


  LIST[element.id].check= !LIST[element.id].check;
  console.log(LIST[element.id]);
};


const cambiarEstilos = () => {
  const link =document.getElementById("estilos");

  link.href = link.href.includes("style.css") ? "style2.css" : "style.css" ;
} ;


const tareaEliminada = (element) => {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].eliminado= true;
  console.log(LIST[element.id]);
};

//llamas funcion 
mas.addEventListener(`click`, () => {
const tarea = input.value 

if(tarea.length>20){alert("la tarea no puede tener mas de 20 caracteres")
return;
}

if(tarea) {
    agregarTarea(tarea,false,false,id);
    LIST.push({
      tarea:tarea,
      check:false,
      eliminado:false,
      id:id
    });
    id++;
}
input.value = "";

console.log(LIST);

})
document.addEventListener("keyup", (e) => {
  if(e.key == 'Enter') {


const tarea = input.value 
if(tarea.length>20){alert("la tarea no puede tener mas de 20 caracteres")
  return;
  }
if(tarea) {
    agregarTarea(tarea,false,false,id);
    LIST.push({
      tarea:tarea,
      check:false,
      eliminado:false,
      id:id
    });
    id++;
}
input.value = "";
  }
})


lista.addEventListener('click',function(event){
  const element = event.target;
  const elementData  =element.attributes.data.value;
  if (elementData == 'check'){
    tareaRealizada(element)
  }
  else if (elementData == 'borrar'){
    tareaEliminada(element)
  }
});
