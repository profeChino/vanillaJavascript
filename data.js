export default [
  {
    id: 1,
    name: 'Johnson',
    series: 'Halo',
    image:
      'https://res.cloudinary.com/dk1qy4pny/image/upload/v1695243134/johnson_rugind.jpg',
  },
  {
    id: 2,
    name: 'Prince of Persia',
    series: 'Prince of Persia',
    image:
      'https://res.cloudinary.com/dk1qy4pny/image/upload/v1695243103/Pop_p5rhrm.jpg',
  },
  {
    id: 3,
    name: 'Kazuhira Miller',
    series: 'Metal Gear Solid',
    image:
      'https://res.cloudinary.com/dk1qy4pny/image/upload/v1695243103/PWMillerPP_n0wxav.webp',
  },
  {
    id: 4,
    name: 'Papyrus',
    series: 'Undertale',
    image:
      'https://res.cloudinary.com/dk1qy4pny/image/upload/v1695243103/Papyrus_h7pwvp.webp',
  },
  {
    id: 5,
    name: 'Daxter',
    series: 'Jak and Daxter',
    image:
      'https://res.cloudinary.com/dk1qy4pny/image/upload/v1695242617/Daxter_nwu5lj.avif',
  },
  {
    id: 6,
    name: 'Wander',
    series: 'Shadow Of the Colossus',
    image:
      'https://res.cloudinary.com/dk1qy4pny/image/upload/v1695241670/WanderCloseUp_cryn3n.webp',
  },
];

export function printName(name){
  console.log(name);
}

export const arrayTypes = [123,"abc", true, false, ['a','b','c'],0]

export const soldados = [  
    { id: 1, nombre: 'Solid Snake',   franquicia: 'MetalGear' },
    { id: 2, nombre: 'Master Chief',  franquicia: 'Halo' },
    { id: 3, nombre: 'Raiden',        franquicia: 'MetalGear'},
    { id: 4, nombre: 'Big Boss',      franquicia: 'MetalGear'},
    { id: 5, nombre: 'Cortana',       franquicia: 'Halo'},
    { id: 6, nombre: 'Inquisidor',    franquicia: 'Halo'}
]
 
export const benitoJrz = {
  name: "Benito Juarez",
  title: "President of Mexico",
  nickname: "Benemerito de las Americas",
  Birthdate: "1806-03-21",
  children: [{
    name:"María de Jesús",
    lastName:"Juárez Maza"
  },{
    name:"Susana",
    lastName:"Juárez Chagoya"
  }],  
  dateOfdeath: "1872-07-18"
}

export const JsonDePruebas = {
  "Nombre": "Roberto",
  "Apodo": "El Dinosaurio Anacleto",
  "Edad": 18000,
  "Estudiante":false,
  "Hobbies": ["Escalar Montaña","Bailar","Jugar Videojuegos", "Odiar Personas"],
  "Mascotas": ["🐢","🐟","🐕","🐈"],
  "Esposa": {
    "Nombre": "Ana Lisa",
    "Edad" : 20,
    "Estudiante":true
  },
  "Empleados": [
    {
      "Nombre": "Policarpo",
      "Puesto": "Presentador Top Músical"
    },
    {
      "Nombre": "Tulio",
      "Puesto": "Presentador 31 Minutos"
    },
    {
      "Nombre": "Juan Carlos Bodoque",
      "Puesto": "Presentador Nota Verde"
    }
  ],
  "CosasFavoritas": [
                      "🍕",
                      true,
                      "reir",
                      7, 
                      {
                        "domicilio":"casa blanca", 
                        "bienes":["🪑","🛏","🔦","💰"]
                      }
                    ]
}
