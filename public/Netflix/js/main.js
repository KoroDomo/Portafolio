const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


const movieSearch = "batman";
let searchQuery = 'https://online-movie-database.p.rapidapi.com/auto-complete?q='+movieSearch;

/* ----------------- Event Listener para flecha derecha ---------- */
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

/* ----------------- Event Listener para flecha izquierda ---------- */
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});


/* ----------------- Paginacion -------------------- */
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) =>{
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

/* ----------------------------- Hover -------------------------*/
peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

/* -------------------- IMDB API --------------------- */
/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f4a813befmshd07aac7bbe8e8f4p16107fjsn604f7ab33768',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch(searchQuery, options)
	.then(response => response.json())
	.then(data => {
        const list = data.d;
        //console.log(typeof list)
        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const link = item.id;
            //const movie = `<img src="${poster}"> <h2>${name}</h2>`
            const movie = `<div class="pelicula"><a href="https://www.imdb.com/title/${link}/"><img src="${poster}" alt="imagen de sin city"></a></div>`
            document.querySelector('.carousel').innerHTML += movie;
        })
    })
	.catch(err => console.error(err));


    /*------------------------------PoGO----------------------*/
    /*const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9f4a813befmshd07aac7bbe8e8f4p16107fjsn604f7ab33768',
            'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com'
        }
    };
    
    fetch('https://pokemon-go1.p.rapidapi.com/pokemon_names.json', options1)
        .then(response => response.json())
        .then(data => {
            const list = data;
            console.log(list[1])

            for(let i = 1; i <899; i++){
                console.log(list[i])
            }

            list.map((item) => {
                const name = item.name;
                const number = item.id;
            
                const pokemon = `<li><h2>Name: ${name}</h2> <h2>Number: ${number}</h2></li>`
                document.querySelector('.pokemones').innerHTML += pokemon;
            })
        })
        .catch(err => console.error(err));*/