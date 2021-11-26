//Variables
const z = 1.64;

var n1, n2, e1, e2, p1, p2, resultMenor, resultMayor;

obtenerDatos = () => {
    n1 = Number(document.getElementById('muestra').value);
    n2 = Number(document.getElementById('muestra').value);
    e1 = document.getElementById('exitos1').value;
    e2 = document.getElementById('exitos2').value;


    if (isNaN(n1) || n1 == null || n1 == '') return true;
    if (isNaN(n2) || n2 == null || n2 == '') return true;
    if (isNaN(e1) || e1 == null || e1 == '') return true;
    if (isNaN(e2) || e2 == null || e2 == '') return true;
    if (n1 < e1) return true;
    if (n2 < e2) return true;
    p1 = Number(e1) / n1;
    p2 = Number(e2) / n2;

    return false;
};

calcularDatos = () => {
    if (obtenerDatos()) {
        alert('No puede haber una muestra inferior al numero de éxitos ni espacios vacios, por favor revisar');
        return;
    }
    var audio = new Audio('click.mp3');
    audio.play();


    if (n1 != '' && n2 != '' && e1 != '' && e2 != '') {
        resultMenor = (((p1 > p2) ? p1 : p2) - ((p1 < p2) ? p1 : p2)) - z * (Math.sqrt((p1 * (1 - p1) / n1) + (p2 * (1 - p2) / n2)));
        resultMayor = (((p1 > p2) ? p1 : p2) - ((p1 < p2) ? p1 : p2)) + z * (Math.sqrt((p1 * (1 - p1) / n1) + (p2 * (1 - p2) / n2)));

        resultMayor = resultMayor.toFixed(4);
        resultMenor = resultMenor.toFixed(4);
        p1 = p1.toFixed(3) * 100;
        p2 = p2.toFixed(3) * 100;

        document.getElementById('porcentajeHombre').innerHTML = p1 + "%";
        document.getElementById('porcentajeMujer').innerHTML = p2 + "%";
        document.getElementById('limiteInferior').innerHTML = resultMenor;
        document.getElementById('limiteSuperior').innerHTML = resultMayor;
        document.getElementById('respuesta').innerHTML = 'El porcentaje para los hombres es ' + p1 + '% y para las mujeres es ' + p2 + '%. Con respecto a la estimación de la proporción con un intervalo de confianza del 90% tenemos que distan entre ' + resultMenor + ' a ' + resultMayor;

    } else {
        console.log('ERROR_LLENAR DATOS');
    }

};