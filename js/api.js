let peliculas = []; // Cambiado de "pokemones" a "peliculas"

async function conexionHome() { // Cambiado de "conexionLista" a "conexionHome"
    const res = await fetch('https://ghibliapi.vercel.app/films');
    const data = await res.json();
    peliculas = data; // Cambiado de "pokemones" a "peliculas"
    mostrarPeliculas(peliculas); // Cambiado de "mostrarLista" a "mostrarPeliculas"
}

conexionHome(); // Cambiado de "conexionLista" a "conexionHome"