var contador=0;
for(var i=0;i<=100;i++){
    if(i%2 != 0){
        document.write(i+"<br>");
        contador++;
    }
}
document.write("Cantidad de impares: "+contador)