import Personajes,{soldados,JsonDePruebas} from './data.js'

// console.log("Personajes",Personajes);

const main = document.getElementById("main");

let mappedSoldados = soldados.map((soldado) => { 

  // main.innerHTML += '<div class="flex"> <h1>'+ soldado.nombre +'</h1>  </div>'
  main.innerHTML += `<div class="flex"> <h3>${soldado.id}</h3> <h1>${soldado.nombre}</h1> <p>${soldado.franquicia}</p>  </div>`
  return soldado.nombre
})

// console.log(mappedSoldados);

let filteredSoldados = soldados.filter((soldado) => { return soldado.franquicia === 'Halo'});

// console.log(filteredSoldados);

console.log(JsonDePruebas.Esposa.Nombre);
