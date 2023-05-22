//Scope Global

var nombre="Jairo" //se creo una varible de tipo global que se utiliza dentro y fuera

function saludo(){
    console.log(`Dentro la funcion ${nombre}`);
    var apellido = "Gomez"
    return 0;
}
console.log(saludo());
console.log(`Fuera de la funcion ${nombre}`)

//Scope local

var nombre1="Miguel"

function saludo(){
var apellido1="Gomez" //esta varible solo se puede usar dentro la funcion no fuera
console.log(`Dentro de la funcion ${apellido1}`)
return 0;
}

console.log(saludo());
console.log(`Fuera de la funcion ${apellido1}`)

