let habilidad;
url = 'http://localhost:3000/habilidades'


fetch(url).then((response) => response.json())
.then((habilidad) => {
    document.getElementById('net').innerHTML = habilidad.Tecnologias[0]
    document.getElementById('eclipse').innerHTML = habilidad.Tecnologias[1]

    document.getElementById('html').innerHTML = habilidad.Lenguajes[0].Lenguaje.Nombre
    document.getElementById('css').innerHTML = habilidad.Lenguajes[1].Lenguaje.Nombre
    document.getElementById('js').innerHTML = habilidad.Lenguajes[2].Lenguaje.Nombre
    document.getElementById('cpp').innerHTML = habilidad.Lenguajes[3].Lenguaje.Nombre
    document.getElementById('csharp').innerHTML = habilidad.Lenguajes[4].Lenguaje.Nombre
    document.getElementById('c').innerHTML = habilidad.Lenguajes[5].Lenguaje.Nombre
    document.getElementById('java').innerHTML = habilidad.Lenguajes[6].Lenguaje.Nombre
    console.log(habilidad)
})
.catch((error) => {
    console.log('Error ', error.message)
})

