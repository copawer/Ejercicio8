function calcular()
{
    var n = document.getElementById("n").value;
    var number=21;
    var resultado;
    
    var salida =document.getElementById("salida");
    
    if( n>number )
    {
        
       resultado = n-number;
        resultado=resultado*2;
        salida.innerHTML=resultado;
        
    }
    else
    {
        resultado = number-n;
        salida.innerHTML=resultado;
    }
}