
// ------------------------ Funcion para llamar API y buscar pokemon
let buscarPokemon = () => {
    
        const pokemonBuscado = formato(document.getElementById('nombre').value);
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}`
    
    
        fetch(url).then((response) => response.json())
            .then((pokemon) => {
                getName(pokemon);
                getSprite(pokemon);
                getHeight(pokemon);
                getWeight(pokemon);
                getHp(pokemon);
                getAttack(pokemon);
                getDefense(pokemon);
                getSpAttack(pokemon);
                getSpDefense(pokemon);
                getSpeed(pokemon);
                getMoves(pokemon);  
                colorType(pokemon);               
            })  
            .catch((error) => {  
                console.log('Error: ', error.message);
            })    
}

// --------------------------- Funcion para cambiar color background acorde al tipo

const colorType = (n) => {
    //let color = document.getElementById("contenedor-principal").style.backgroundColor;
    let type = n.types[0].type.name;

    switch(type){
        case 'normal':
            document.getElementById("contenedor-principal").style.backgroundColor = "#A8A77A";
            break;
        case 'fire':
            document.getElementById("contenedor-principal").style.backgroundColor = "#EE8130";
            break;
        case 'water':
            document.getElementById("contenedor-principal").style.backgroundColor = "#6390F0";
            break;
        case 'grass':
            document.getElementById("contenedor-principal").style.backgroundColor = "#7AC74C";
            break;    
        case 'electric':
            document.getElementById("contenedor-principal").style.backgroundColor = "#F7D02C";
            break;
        case 'ice':
            document.getElementById("contenedor-principal").style.backgroundColor = "#96D9D6";
            break;
        case 'fighting':
            document.getElementById("contenedor-principal").style.backgroundColor = "#C22E28";
            break;
        case 'poison':
            document.getElementById("contenedor-principal").style.backgroundColor = "#A33EA1";
            break;
        case 'ground':
            document.getElementById("contenedor-principal").style.backgroundColor = "#E2BF65";
            break;
        case 'flying':
            document.getElementById("contenedor-principal").style.backgroundColor = "#A98FF3";
            break;
        case 'psychic':
            document.getElementById("contenedor-principal").style.backgroundColor = "#F95587";
            break;
        case 'bug':
            document.getElementById("contenedor-principal").style.backgroundColor = "#A6B91A";
            break;
        case 'rock':
            document.getElementById("contenedor-principal").style.backgroundColor = "#B6A136";
            break;    
        case 'ghost':
            document.getElementById("contenedor-principal").style.backgroundColor = "#735797";
            break;
        case 'dark':
            document.getElementById("contenedor-principal").style.backgroundColor = "#705746";
            break;
        case 'dragon':
            document.getElementById("contenedor-principal").style.backgroundColor = "#6F35FC";
            break;
        case 'steel':
            document.getElementById("contenedor-principal").style.backgroundColor = "#B7B7CE";
            break;
        case 'fairy':
            document.getElementById("contenedor-principal").style.backgroundColor = "#D685AD";
            break;
            
    }

}

// --------------------- Capitalizar primera letra
const formato = (palabra) => {
    return palabra.toLowerCase();
}

// ---------------------- Insertar imagen pokemon buscado
const getSprite = (n) => {
    let imagen = `<img src="${n.sprites.front_default}" alt="imagen del pokemon" width="200">`;
    document.getElementById('imagen').innerHTML = imagen;
}

// ----------------------- Insertar nombre pokemon buscado
const getName = (n) => {
    let nombreLower = n.name;
    let nombre = nombreLower.charAt(0).toUpperCase() + nombreLower.slice(1);

    document.getElementById('pkmName').innerHTML = nombre;
}

// ------------------------- Insertar altura pokemon buscado
const getHeight = (n) => {
    let altura = n.height;
    document.getElementById('height').innerHTML = "Height: " + altura;
}

// ------------------------- Insertar peso pokemon buscado
const getWeight = (n) => {
    let peso = n.weight;
    document.getElementById('weight').innerHTML = "Weight: " + peso;
}

// ------------------------- Insertar HP (health points) pokemon buscado
const getHp = (n) => {
    let vida = n.stats[0].base_stat;
    document.getElementById('health').innerHTML = "HP: " + vida;
}

// ------------------------- Insertar ataque pokemon buscado
const getAttack = (n) => {
    let ataque = n.stats[1].base_stat;
    document.getElementById('attack').innerHTML = "Attack: " + ataque;
}

// ------------------------- Insertar defensa pokemon buscado
const getDefense = (n) => {
    let defensa = n.stats[2].base_stat;
    document.getElementById('defense').innerHTML = "Defense: " + defensa;
}

// ------------------------- Insertar ataque especial pokemon buscado
const getSpAttack = (n) => {
    let ataqueSp = n.stats[3].base_stat;
    document.getElementById('sp_attack').innerHTML = "Sp. Attack: " + ataqueSp;
}

// ------------------------- Insertar defensa especial pokemon buscado
const getSpDefense = (n) => {
    let defensaSp = n.stats[4].base_stat;
    document.getElementById('sp_defense').innerHTML = "Sp. Defense: " + defensaSp;
}

// ------------------------- Insertar rapidez pokemon buscado
const getSpeed = (n) => {
    let rapidez = n.stats[5].base_stat;
    document.getElementById('speed').innerHTML = "Speed : " + rapidez;
}

//// ------------------------- Insertar movimientos pokemon buscado
const getMoves = (n) => {
    
    for(let i = 0; i < n.moves.length; i++)
            {
                document.getElementById('move').innerHTML += `<li>${n.moves[i].move.name}</li>`;
            } 
    
}


// ------------------------- funcionamiento del acordeón
var acc = document.getElementsByClassName("accordion");
var j;

for (j = 0; j < acc.length; j++) {
  acc[j].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}




