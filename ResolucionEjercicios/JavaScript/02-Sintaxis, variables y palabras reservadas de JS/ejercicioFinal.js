
let desarrolador = true;
const libro = {
    titulo: 'La voz de tu alma',
    autor: 'Lain García Calvo',
    fecha: 'abril de 2013',
    url: 'https://www.alibrate.com/libro/la-voz-de-tu-alma/59872ea4cba2bce50c1dcb73'
 
}

const info = [ "Dante", 21, desarrolador ? 'Soy desarrollador' : 'No soy desarrollador',new Date('Sep 05 2001') ];
const lista = [ info[0], info[1],info[2],info[3], libro];

console.log(lista);

