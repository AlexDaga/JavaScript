function Sumar() {

    var x,y,suma,text;
    
    x=document.getElementsByClassName("num1").value;
    y=document.getElementsByClassName("num2").value;

    suma=parseInt(x)+parseInt(y);
    text=suma;

    Sumando.textContent=`El resultado es` 
}