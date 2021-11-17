//Variables
const z = 1.64;

var n1, n2, e1, e2, p1, p2, resultMenor, resultMayor;

obtenerDatos=()=>{
    n1 = Number(document.getElementById('muestra1').value);
    n2 = Number(document.getElementById('muestra2').value);
    e1 = document.getElementById('exitos1').value;
    e2 = document.getElementById('exitos2').value;

    

    p1= Number(e1)/n1;
    p2= Number(e2)/n2;
    

};

calcularDatos=()=>{
    obtenerDatos();
  
    resultMenor=(((p1>p2)?p1:p2)-((p1<p2)?p1:p2))-z*(Math.sqrt((p1*(p1-1)/n1)+(p2*(p2-1)/n2)));
    resultMayor=(((p1>p2)?p1:p2)-((p1<p2)?p1:p2))+z*(Math.sqrt((p1*(p1-1)/n1)+(p2*(p2-1)/n2)));

    document.getElementById('porcentajeHombre').innerHTML=p1;
    document.getElementById('porcentajeMujer').innerHTML=p2;
    document.getElementById('limiteInferior').innerHTML=resultMenor;
    document.getElementById('limiteSuperior').innerHTML=resultMayor;
    document.getElementById('respuesta').innerHTML='El porcentaje para los hombres es'+p1+'% y para las mujeres es'+p2+'%. Con respecto a la estimación de la proporción con un intervalo de confianza del 90% tenemos que distan entre'+resultMenor+' a '+resultMayor;
};