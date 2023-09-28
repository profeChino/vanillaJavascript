import Personajes from './data.js'

const contacts = document.getElementById("Contactos");
const input = document.getElementById("search");
const btn = document.querySelector("button")

console.log(Personajes);

btn.addEventListener('click',(e) => {

  let busqueda = input.value.toUpperCase();
  if(busqueda.length <= 2) {
    input.value = '';
    showPersonajes(Personajes);
    return;
  }

  let personajesFiltrados = Personajes.filter((personaje) => {
    return personaje.name.toUpperCase() === busqueda;
  })

  showPersonajes(personajesFiltrados,true);
  return;
})


function showPersonajes(characters, erase=false){

  if(erase)
  contacts.innerHTML = " ";

  characters.map((personaje) => {
    const {id, series, name, image} = personaje;
    contacts.innerHTML += `<div class="flex item">
                              <img src="${image}" alt="no se pudo">
                              <div>
                                <h1>${name}</h1>
                                <p>${series} series</p>
                              </div>
                            </div>`;
    })
}

showPersonajes(Personajes);
