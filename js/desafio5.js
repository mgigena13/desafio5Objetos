function solicitaDato (){
    let nombreAlumno = prompt("Ingresa tu nombre completo");
    alert("Bienvenido a tu vida universitaria " + nombreAlumno)
    return nombreAlumno;
}
solicitaDato();

function solicitaCarrera (){
    let inscripcionCarrera = Number(prompt(`Selecciona tu carrera:
    1- Diseño Grafico
    2- Arquitectura
    3- Licenciatura en Kinesiologia
    4- Licenciatura en Nutrición`));
    alert("Excelente eleccion")
    return inscripcionCarrera
}

solicitaCarrera ();

class Alumno{
    constructor (nombre, edad, dni, carrera) {
        this.nombre = nombre;
        this.edad =  edad;
        this.dni = dni;
        this.carrera = carrera;
    }
    saludar() {
        alert ("bienvenido " + this.nombre)
    }
} 

const alumno1 = new Alumno ("Martin Gigena Curchod", 40, 33222444, "Full Stack");
console.log(alumno1);

alumno1.saludar();