
let arregloPersonas = new Array();

function Persona (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

function iniciarPagina(){
    
    document.getElementById("btnAgregar").onclick = function() {
        
        let nombre = document.getElementById("txtNombre").value;
        let apellido = document.getElementById("txtApellido").value;
        let edad =document.getElementById("txtEdad").value;

        let p =new Persona(nombre, apellido, edad);
        arregloPersonas.push(p);
    }

    document.getElementById("btnMostrar").onclick = function () {

        let registro = document.getElementById("lstPersonas").insertRow();
        
        registro.insertCell(0).innerText = "Nombre";
        registro.insertCell(1).innerText = "Apellido";
        registro.insertCell(2).innerText = "Edad";

        for (let i=0; i<arregloPersonas.length; i++) {

            let registro = document.getElementById("lstPersonas").insertRow();

            const celdaNombre = registro.insertCell(0);
            const celdaApellido = registro.insertCell(1);
            const celdaEdad = registro.insertCell(2);

            celdaNombre.innerText = arregloPersonas[i].nombre;
            celdaApellido.innerText = arregloPersonas[i].apellido;
            celdaEdad.innerText = arregloPersonas[i].edad;
        }
    }

}