

/* EJERCICIO 1

Vamos a trabajar un poco con la consola para ir amigandonos con ella ya que será nuestra mejor amiga de ahora en más.

Declara una variable llamada nombre en tu consola y asignale tu nombre.
Declara una variable llamada apellido y asignale como valor tu apellido.
Muestra por consola las variables nombre y apellido.**/

/*let nombre = "Jaderson";
let apellido = "Barrera"
console.log(nombre, apellido);*/




/* EJERCICIO 2

Bien, ahora agregemos Javascript a nuestro proyecto web.

En nuestro archivo HTML vamos a vincular un fichero/archivo que se llame script.js(Este archivo debemos crearlo previamente).
Recuerda que para vincular el fichero debemos hacerlo con la etiqueta script la cual debemos agregarla antes de que cierre la etiqueta body.
Dentro del archivo script.js, vamos a declarar las variables nombre y apellido que habiamos declarado en la consola. Pero, esta vez deberemos asignarle el método prompt() para que sea el usuario quien introduzca los datos, nombre y apellido.
Mostrar una alerta de bienvenida a nuestra página con el nombre y el apellido del usuario “Bienvenido a nuestra página (nombre+apellido)” */

/*nombre = prompt ("Hola, ingresa tu primer nombre:");
apellido = prompt ("Ingresa tu primer apellido:");
alert (`Bienvenid@ ${nombre} ${apellido}`)*/




/* EJERCICIO 3

Crea 3 variables numero1,numero2 y resultado.
Pidele al usuario que ingrese los valores de las variables numero1 y numero2 mediante un prompt().
Asigna a la variable resultado el valor de la suma entre numero1 y numero2.
Muestra un alerta con el mensaje “El resultado es: (resultado)”. */

/*let numero1 = Number (prompt ("ingresa el rpimer numero"));
let numero2 = Number (prompt ("ingresa el sugundo numero"));
let resultado = numero1 + numero2
alert (`El resultado es: ${resultado}`)*/






/* EJERCICIO 4

Crea 2 variables numero y numerotriple.
Pidele al usuario que ingrese el valor del numero a calcular mediante un prompt().
Asigna a la variable numerotriple el valor de la multiplicación por 3 del numero ingresado.
Muestralo el resultado por consola con el mensaje “El triple de este número es: (xx)”.
*/

/*let numero = Number(prompt("Ingrese un numero "));
let numeropTriple = numero * 3;
console.log(`El triple de este numero es: ${numeropTriple}`);*/





/* EJERCICIO 5


*/


/*let coleccion =[
    {
        id:1, titulo:"Cien años de Soledad",autor:"Gabriel Garcia Marquez",añoPublicacion:1967,genero:"Fantasía",disponible:true
    },{
        id:2, titulo:"1984",autor:"George Orwell",añoPublicacion:1949,genero:"Distopía",disponible:false
    },{
        id:3, titulo:"La rebelión de las ratas",autor:"Fernando Soto",añoPublicacion:1962,genero:"Realismo",disponible:true
    },{
        id:4, titulo:"Don Quijote De la Mancha",autor:"Miguel De Cervantes",añoPublicacion:1605,genero:"Sátira",disponible:true
    },{
        id:5,titulo: "El Señor de los Anillos: La Comunidad del Anillo",autor: "J.R.R. Tolkien",añoPublicacion: 1954,genero: "Fantasía",disponible: false
    }
] 

coleccion.push({
    id: 6,
    titulo: "El Silmarillion",
    autor: "J.R.R. Tolkien",
    añoPublicacion: 1977,
    genero: "Fantasía",
    disponible: true});

console.log("agregando un libro al final de la coleccion" , coleccion);


coleccion.unshift({
    id: 7,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupery",
    añoPublicacion: 1943,
    genero: "Literatura infantil",
    disponible: false,
});
console.log("añadiendo un libro al inicio de la coleccion" , coleccion); 

let quitarElUltimoLibro = coleccion.pop();
console.log("eliminando el ultimo libro",quitarElUltimoLibro);

coleccion.shift();
console.log("eliminando el primer libro",coleccion);


const idLibro =3;
let buscarLibro =coleccion.findIndex(coleccion =>coleccion.id === idLibro);
coleccion.splice (buscarLibro ,1)
console.log("depues de eliminar el id 3 " , coleccion);

//Aqui empiezo yo

coleccion.splice(2,0,{
    id: 8,
    titulo: "El hombre mas rico de Babilonia",
    autor: "George s. Clason",
    añoPublicacion: 1926,
    genero: "Economia",
    disponible: true
})
console.log("Añadiendo un libro en la posicion 2 sin eliminar alfuno", coleccion);


let librosReemplazados = coleccion.splice (2,2, {

    id: 9,
    titulo: "Invierte un poco",
    autor: "Natalia de Santiago",
    añoPublicacion: 2022,
    genero: "Economia",
    disponible: true
},
 {
    id: 10,
    titulo: "La Melancolia de los Feos",
    autor: "Mario Mendoza",
    añoPublicacion: 2016,
    genero: "Ficcion",
    disponible: false
})

console.log("Se reemplazaron los libros con indice 3-4",librosReemplazados);



let librosDel2000 = coleccion.filter (function(Recientes){
    return Recientes.añoPublicacion >= 2000;
})

console.log("Estos son los libros que se publicaros despues del año 2000:",librosDel2000);



let primerLibroEncontrado = coleccion.find (function(stock){
    return stock.genero === "Fantasía";   
})

console.log("El primer libro que se encontro de fantasia fue:", primerLibroEncontrado);


let indiceDeLaPelicula = coleccion.findIndex (function(indice){
    return indice.id === 9;
})

console.log("El indice del libro buscado por el id 3 es:", indiceDeLaPelicula);



let autorLibro = coleccion.some(function(name){
    return name.autor === "George Orwell"
})

console.log("Hay al menos un libro cuyo auntor sea George Orwell?", autorLibro );*/




let estudiantes = [
    {nombre:"Andres", calificaciones: [50, 30, 50, 30]},
    {nombre:"Felipe", calificaciones: [50, 30, 20, 40]},
    {nombre:"Carmen", calificaciones: [20, 30, 30, 40]},
    {nombre:"Oscar", calificaciones: [50, 40, 30, 50]},
]

 console.log(" - Lista de los estudiantes y sus calificaciones");

estudiantes.forEach(mostrarStudiantes => {
    console.log( mostrarStudiantes);
    
});


//PROMEDIO DE LOS ESTDUIANTES
console.log(" - El promedio de los estudiantes fue");


function calcularPromedio(calificaciones){
    let suma = calificaciones.reduce((acumular, calificacion) => acumular + calificacion, 0);
    let promedio = suma / calificaciones.length;
    return promedio.toFixed(2);
};

estudiantes.forEach(mostrarStudiantes =>{
    let promedio = calcularPromedio(mostrarStudiantes.calificaciones);
    console.log(`${mostrarStudiantes.nombre}: promedio = ${promedio}`);
})


//MEJOR CALIFICACION

function obtenerMejorCalificacion(calificaciones) {
	return Math.max(...calificaciones);
}



//CALIFICACION MAS BAJA
function obtenerPeorCalificacion(calificaciones) {
	return Math.min(...calificaciones);
}

estudiantes.forEach((estudiantes) => {
	let mejor = obtenerMejorCalificacion(estudiantes.calificaciones);
	let peor = obtenerPeorCalificacion(estudiantes.calificaciones);
   console.log(estudiantes.nombre, "mejor calificacion:", mejor, "peor calificacion:", peor);
});

 

//AGREGAR CALIFICACION

function agregarCalificacion(nEstudiante, nCalificacion){
    let buscarEstudiante = estudiantes.find(estudent => estudent.nombre === nEstudiante);
    if (buscarEstudiante) {
        buscarEstudiante.calificaciones.push(nCalificacion);
        console.log(" - Se agrego una nueva calificacion al estudiante:", nEstudiante);
    } else { 
        console.log(" - El estudiante no existe");
    }
} 

agregarCalificacion("Oscar", 10)
console.log(estudiantes);


//ELIMINAR LA ULTIMA CALIFICACION

function eliminarCalificacion (nEstudiante){
    let buscarEstudiante = estudiantes.find(estudent => estudent.nombre === nEstudiante);
    if (buscarEstudiante) {
        buscarEstudiante.calificaciones.pop()
        console.log(" - Se elimino la ultima calificacion del estudiante:", nEstudiante);
    } else {
        console.log(" - El estudiante no existe");
    }
}

eliminarCalificacion("Felipe")
console.log(estudiantes);


//FILTRAR ESTUDIANTES APROBADOS (PROEMDIO MINIMO)

console.log(" - Estudiantes que aprovaron");

function filtrarEstudiantesAprovados(estudiantes, minPromedio){
    return estudiantes.filter(student => calcularPromedio(student.calificaciones) >= minPromedio);
}
let minPromedio = 35;
let aprovados = filtrarEstudiantesAprovados (estudiantes, minPromedio)

console.log(" - Con un promedio igual o superior a ", minPromedio, "fueron:", aprovados);



//ORDENAR ESTUDIANTES POR ORDEN

console.log(" - Se organizo la lista de estudiantes alfabeticamente por su nombre");

estudiantes.sort ((a,b) => a.nombre.localeCompare (b.nombre));

console.log(estudiantes);


//GENERAR REPORTE INDIVIDUAL

function generarReporteIndividual(nEstudiante) {
	let estudiante = estudiantes.find((i) => i.nombre === nEstudiante);
	if (estudiante) {
		let promedio = calcularPromedio(estudiante.calificaciones);
		let notaMayor = obtenerMejorCalificacion(estudiante.calificaciones);
		let notaPeor = obtenerPeorCalificacion(estudiante.calificaciones);

        console.log(" - Reporte general de:", nEstudiante);
		console.log("calificaciones:", estudiante.calificaciones);
		console.log("Promedio:", promedio);
		console.log("Mejor calificacion:", notaMayor);
		console.log("Mejor calificacion:", notaPeor);


	} else { 
        console.log("Estudiante", nEstudiante, "no existe");
	
	}
}

generarReporteIndividual("Oscar");



//FUNCIONALIDAD PRINCIPAL (MENU INTERACTIVO)

function iniciasGestionCalificaciones (){}
