// Constructor de Alumno
class Alumno {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}
const alumnos = [
    new Alumno("Jose Antonio", 19, "DAW"),
    new Alumno("Sergio", 20, "DAW"),
    new Alumno("Migue", 21, "DAW"),
    new Alumno("Ivan", 21, "DAW"),
    new Alumno("Juan Antonio", 21, "DAW"),
    new Alumno("Alejandro", 20, "DAW"),
    new Alumno("Hugo", 19, "DAW"),
    new Alumno("Jose", 36, "DAW"),
    new Alumno("Alicia", 19, "DAW"),
    new Alumno("David", 18, "DAW"),
    new Alumno("Diana", 21, "DAW"),
    new Alumno("Fernando", 21, "DAW"),
    new Alumno("Fernando VB", 21, "DAW"),
    new Alumno("Gonzalo", 21, "DAW"),
    new Alumno("Polo", 20, "DAW"),
    new Alumno("Kike", 20, "DAW"),
    new Alumno("Laura", 21, "DAW"),
    new Alumno("Luna", 21, "DAW"),
    new Alumno("Nico", 21, "DAW"),
    new Alumno("Pepe", 21, "DAW"),
    new Alumno("Samu", 21, "DAW"),
    new Alumno("Ortega", 18, "DAW")
];
const generateBtn = document.getElementById('generate-btn');
const cardsContainer = document.getElementById('cards-container');
const alumnosGenerados = [];
// Función para generar un número aleatorio entre 0 y el tamaño de la lista de alumnos
function generarAlumnoAleatorio() {
    if (alumnosGenerados.length >= alumnos.length) {
        alert('No se pueden generar más alumnos. Todos han sido generados.');
        return;
    }

    let indice;
    do {
        indice = Math.floor(Math.random() * alumnos.length);
    } while (alumnosGenerados.includes(indice));

    alumnosGenerados.push(indice);
    return alumnos[indice];
}
function crearCard(alumno) {
    const card = document.createElement('div');
    card.classList.add('card');

    const nombre = document.createElement('h3');
    nombre.textContent = alumno.nombre;

    const edad = document.createElement('p');
    edad.textContent = `Edad: ${alumno.edad}`;

    const curso = document.createElement('p');
    curso.textContent = `Curso: ${alumno.curso}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Borrar';

    deleteBtn.addEventListener('click', () => {
        card.remove();
        const index = alumnosGenerados.indexOf(alumnos.indexOf(alumno));
        if (index > -1) {
            alumnosGenerados.splice(index, 1);
        }
    });
    card.appendChild(nombre);
    card.appendChild(edad);
    card.appendChild(curso);
    card.appendChild(deleteBtn);

    return card;
}
generateBtn.addEventListener('click', () => {
    const alumno = generarAlumnoAleatorio();
    if (alumno) {
        const card = crearCard(alumno);
        cardsContainer.appendChild(card);
    }
});
