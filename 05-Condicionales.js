var Usuario=true
var edad=16
//console.log(typeof(Usuario));

if(Usuario){
    console.log("Tiene acceso al contenido")
}else{
    console.log("No tiene acceso al contenido,Registrese")
}

if(edad==18){
    console.log("Primer voto")
}else if(edad>18){
    console.log("Voto regular");
}
else{
    console.log("No puede votar")
}
