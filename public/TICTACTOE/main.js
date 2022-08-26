const equis = "&#10060"
const o = "&#11093"
let flag = true;
let entradas = [1, '2', 3, '4', 5, '6', 7, '8', 9];
let ganarPartida = false;

const filler = (id) => {   
    
    let casilla = document.getElementById(id);
    if(flag){
        casilla.innerHTML += equis;
        flag = false;
        entradas[numerificador(id)] = equis;
        console.log(entradas);
        ganar();
    }else{
        casilla.innerHTML += o; 
        flag = true;
        entradas[numerificador(id)] = o;
        console.log(entradas);
        ganar();
    }   
}

/*
            |       |
          0 |   1   | 2
        -----------------
          3 |   4   | 5
        -----------------
           6|   7   | 8
            |       |
*/
function ganar() {

    if(entradas[0] === entradas[1] && entradas[0] === entradas[2])
    {
        console.log(entradas[0] + " GANO!")
        bucleBloquador()
        mostrarMensajeGanador(entradas[0])

     
    } else if(entradas[3] === entradas[4] && entradas[3] === entradas[5])
    {
        console.log(entradas[3] + " GANO!")
        bucleBloquador()
        mostrarMensajeGanador(entradas[3])
 
    } else if(entradas[6] === entradas[7] && entradas[6] === entradas[8])
    {
        console.log(entradas[6] + " GANO!")
        bucleBloquador()
        mostrarMensajeGanador(entradas[6])

    } else if(entradas[0] === entradas[3] && entradas[0] === entradas[6])
    {
        console.log(entradas[0] + " GANO!")
        bucleBloquador()
        mostrarMensajeGanador(entradas[0])

    } else if(entradas[1] === entradas[4] && entradas[1] === entradas[7] )
    {
        console.log(entradas[1] + " GANO!")
        bucleBloquador()
        mostrarMensajeGanador(entradas[1])

    } else if (entradas[2] === entradas[5] && entradas[2] === entradas[8])
    {
        console.log(entradas[2] + " GANO!")
        bucleBloquador()
        mostrarMensajeGanador(entradas[2])

    } else if(entradas[0] === entradas[4] && entradas[0] === entradas[8] )
    {
        console.log(entradas[0] + " GANO!")
        bucleBloquador()
        mostrarMensajeGanador(entradas[0])

    } else if(entradas[6] === entradas[4] && entradas[6] === entradas[2])
    {
        console.log(entradas[6] + " GANO!")
        bucleBloquador()
        mostrarMensajeGanador(entradas[6])

    }
}

const numerificador = (elemento) => {
    switch(elemento){
        case 'cero': 
            return 0;
            break;
        case 'uno': 
            return 1;
            break;
        case 'dos':
            return 2;
            break;
         case 'tres': 
            return 3;
            break;
        case 'cuatro':
            return 4;
            break;
        case 'cinco': 
            return 5;
            break;
        case 'seis':
            return 6;
            break;
        case 'siete': 
            return 7;
            break;
        case 'ocho':
            return 8;
            break;
    }
}

function bucleBloquador(){
    var list, index;
        list = document.getElementsByClassName("cuadro");
        for (index = 0; index < list.length; ++index) {
            list[index].setAttribute("onclick", null);
        }
    ganarPartida = true;
}

function mostrarMensajeGanador(ganador){
    document.getElementById("mensaje-ganador").innerHTML += ganador + " ha ganado!"
}



/* --------------------- CODIGO RECHAZADO -----------------------*/
/*
document.getElementByClassName("cuadro").onclick = function() {
    div.innerHTML += "lol";
}*/
/*
document.getElementById("showy1").onclick = function() {
    document.getElementById("letraO").style.visibility = "visible";
}

document.getElementById("showx2").onclick = function() {
    document.getElementById("equis2").style.visibility = "visible";
}

document.getElementById("showy2").onclick = function() {
    document.getElementById("letraO2").style.visibility = "visible";
}

document.getElementById("showx3").onclick = function() {
    document.getElementById("equis3").style.visibility = "visible";
}

document.getElementById("showy3").onclick = function() {
    document.getElementById("letraO3").style.visibility = "visible";
}

document.getElementById("showx4").onclick = function() {
    document.getElementById("equis4").style.visibility = "visible";
}

document.getElementById("showy4").onclick = function() {
    document.getElementById("letraO4").style.visibility = "visible";
}

document.getElementById("showx5").onclick = function() {
    document.getElementById("equis5").style.visibility = "visible";
}

document.getElementById("showy5").onclick = function() {
    document.getElementById("letraO5").style.visibility = "visible";
}

document.getElementById("showx6").onclick = function() {
    document.getElementById("equis6").style.visibility = "visible";
}

document.getElementById("showy6").onclick = function() {
    document.getElementById("letraO6").style.visibility = "visible";
}

document.getElementById("showx7").onclick = function() {
    document.getElementById("equis7").style.visibility = "visible";
}

document.getElementById("showy7").onclick = function() {
    document.getElementById("letraO7").style.visibility = "visible";
}

document.getElementById("showx8").onclick = function() {
    document.getElementById("equis8").style.visibility = "visible";
}

document.getElementById("showy8").onclick = function() {
    document.getElementById("letraO8").style.visibility = "visible";
}

document.getElementById("showx9").onclick = function() {
    document.getElementById("equis9").style.visibility = "visible";
}

document.getElementById("showy9").onclick = function() {
    document.getElementById("letraO9").style.visibility = "visible";
}*/



/*(function () {
    var elements = document.getElementsByClassName('uno');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            this.style.display = 'none';
        });
    }
})();*/

/*
const fillDos = () => {
    const uno = document.getElementById('dos');

    if(flag){
        uno.innerHTML += equis;
        flag = false;
    }else{
        uno.innerHTML += o; 
        flag = true;
    }
}

const fillTres = () => {
    const uno = document.getElementById('tres');

    if(flag){
        uno.innerHTML += equis;
        flag = false;
    }else{
        uno.innerHTML += o; 
        flag = true;
    }
}

const fillCuatro = () => {
    const uno = document.getElementById('cuatro');

    if(flag){
        uno.innerHTML += equis;
        flag = false;
    }else{
        uno.innerHTML += o; 
        flag = true;
    }
}

const fillCinco = () => {
    const uno = document.getElementById('cinco');

    if(flag){
        uno.innerHTML += equis;
        flag = false;
    }else{
        uno.innerHTML += o; 
        flag = true;
    }
}

const fillSeis = () => {
    const uno = document.getElementById('seis');

    if(flag){
        uno.innerHTML += equis;
        flag = false;
    }else{
        uno.innerHTML += o; 
        flag = true;
    }
}

const fillSiete = () => {
    const uno = document.getElementById('siete');

    if(flag){
        uno.innerHTML += equis;
        flag = false;
    }else{
        uno.innerHTML += o; 
        flag = true;
    }
}

const fillOcho = () => {
    const uno = document.getElementById('ocho');

    if(flag){
        uno.innerHTML += equis;
        flag = false;
    }else{
        uno.innerHTML += o; 
        flag = true;
    }
}

const fillNueve = () => {
    const uno = document.getElementById('nueve');

    if(flag){
        uno.innerHTML += equis;
        flag = false;
    }else{
        uno.innerHTML += o; 
        flag = true;
    }
}

*/