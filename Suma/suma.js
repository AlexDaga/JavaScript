function Sumar() {
    
    var num1=parseInt(document.querySelector('#num1').value);
    var num2=parseInt(document.querySelector('#num2').value);

    console.log(num1+num2);
    var resultado =num1+num2;
    
    document.getElementById("res").innerHTML="La suma es: "+resultado;

    Sumando.textContent=`El resultado es` 
}