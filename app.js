let cards = [
  "<div class='col col-sm-4 mb-4' ><div class='card '  ><img src='aaron.jpg' class='card-img-top' alt='...'><div class='card-body'> <h5 class='card-title'>Aaron Montivero</h5><p class='card-text'>Estudiante de Desarrollo Web Full Stack  | HTML | CSS | JS | C</p><a target='_blank' href='https://www.linkedin.com/in/aaron-luciano-montivero/' class='btn btn-primary'>Linkedin</a></div></div></div> ",
  "<div class='col col-sm-4 mb-4' ><div class='card '  ><img src='uriel.jfif' class='card-img-top' alt='...'><div class='card-body'> <h5 class='card-title'>Uriel Milgron</h5><p class='card-text'>Desarrollador frontend | Frontend | HTML | CSS | Javascript | ReactJS</p><a target='_blank' href='https://www.linkedin.com/in/urielmilgron/' class='btn btn-primary'>Linkedin</a></div></div></div> ",
  "<div class='col col-sm-4  mb-4' ><div class='card '  ><img src='angeles.jpeg' class='card-img-top' alt='...'><div class='card-body'> <h5 class='card-title'> Angeles Maldonado</h5><p class='card-text'>Tutora de Desarollo Web| HTML | CSS | JS | Bootstrap | SASS | GIT</p><a target='_blank' href='https://www.linkedin.com/in/maria-de-los-angeles-maldonado/' class='btn btn-primary'>Linkedin</a></div></div></div> ",
  "<div class='col col-sm-4  mb-4' ><div class='card ' ><img src='leonel.jfif' class='card-img-top' alt='...'><div class='card-body'> <h5 class='card-title'>Leonel Montiel</h5><p class='card-text'>Desarrollador Web FullStack - HTML | CSS | JS | Bootstrap | SASS | Node.js | MySQL | Java</p><a target='_blank' href='https://www.linkedin.com/in/leonel-montiel/' class='btn btn-primary'>Linkedin</a></div></div></div> ",
  "<div class='col col-sm-4 mb-4' ><div class='card '  ><img src='dante.jfif' class='card-img-top' alt='...'><div class='card-body'> <h5 class='card-title'>Dante Roldan</h5><p class='card-text '>Estudiante de Desarrollo Web Full Stack | PHP | HTML | CSS | Javascript | Bootstrap</p><a target='_blank' href='https://www.linkedin.com/in/danteroldan/' class='btn btn-primary'>Linkedin</a></div></div></div> ",
  "<div class='col col-sm-4  mb-4' ><div class='card '  ><img src='romina.jpeg' class='card-img-top' alt='...'><div class='card-body'> <h5 class='card-title'>Romina Gonzalez</h5><p class='card-text'> Desarrolladora Web Full Stack HTML | CSS | Bootstrap | JavaScript | React | NodeJS</p><a target='_blank' href='https://www.linkedin.com/in/romina-solange-gonzalez-/' class='btn btn-primary'>Linkedin</a></div></div></div> ",
  "<div class='col col-sm-4  mb-4' ><div class='card '  ><img src='lucas.jfif' class='card-img-top' alt='...'><div class='card-body'> <h5 class='card-title'>Lucas Paz</h5><p class='card-text'>Estudiante de Desarrollo Web Full Stack</p><a target='_blank' href='https://www.linkedin.com/in/lucas-paz-4a9a26234/' class='btn btn-primary'>Linkedin</a></div></div></div> ",
  "<div class='col col-sm-4  mb-4' ><div class='card '  ><img src='nicolas.jfif' class='card-img-top' alt='...'><div class='card-body'> <h5 class='card-title'>Nicolas Pini</h5><p class='card-text'>Estudiante de Programación Web FullStack</p><a target='_blank' href='https://www.linkedin.com/in/nicol%C3%A1s-pini-a0b8b120a/' class='btn btn-primary'>Linkedin</a></div></div></div> ",
  "<div class='col col-sm-4  mb-4' ><div class='card ' ><img src='gabriel.jfif' class='card-img-top' alt='...'><div class='card-body'> <h5 class='card-title'>Gabriel Velasco</h5><p class='card-text'>Desarrollador Web Full Stack  HTML | CSS | JS | Bootstrap</p><a target='_blank' href='https://www.linkedin.com/in/gabriel-ale-velasco/' class='btn btn-primary'>Linkedin</a></div></div></div> ",
];

const packs = [
  "aaron.jpg",
  "aaron.jpg",
  "aaron.jpg",
  "aaron.jpg",
  "aaron.jpg",
  "aaron.jpg",
  "aaron.jpg",
  "aaron.jpg",
  "aaron.jpg",
];

// for (i = 0; i < packs.length; i++) {
//   document.querySelector("#carta").innerHTML += cards[i];
// }

for (i = 0; i < cards.length; i++) {
  document.querySelector(
    "#carta"
  ).innerHTML += `<div class='col col-sm-4 mb-4' ><div class='card '  ><img src=${packs[i]} class='card-img-top' alt='...'><div class='card-body'> <h5 class='card-title'>Aaron Montivero</h5><p class='card-text'>Estudiante de Desarrollo Web Full Stack  | HTML | CSS | JS | C</p><a target='_blank' href='https://www.linkedin.com/in/aaron-luciano-montivero/' class='btn btn-primary'>Linkedin</a></div></div></div>`;
}
