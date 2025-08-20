// Listas de elementos para la excusa
const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Devuelve un elemento aleatorio de un arreglo
function getRandomElement(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Cambio de la funcion para que genere una excusa completa
function generateExcuse() {
  return (
    getRandomElement(who) + " " +
    getRandomElement(action) + " " +
    getRandomElement(what) + " " +
    getRandomElement(when) + "."
  );
}

// Este cambio Muestra 3 excusas en pantalla
function renderExcuses() {
  const container = document.getElementById("contenedor-excusas");
  if (!container) return;


// limpiar antes de mostrar nuevas
  container.innerHTML = ""; 
  for (let i = 0; i < 3; i++) {
    const p = document.createElement("p");
    p.textContent = generateExcuse();
    container.appendChild(p);
  }
}

// Cuando carga la página, muestra las excusas automáticamente
window.onload = function() {
  renderExcuses();
};
