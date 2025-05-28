let peliculas = [];

async function conexionHome() {
  const res = await fetch('https://ghibliapi.vercel.app/films');
  const data = await res.json();
  peliculas = data;
  mostrarPeliculas(peliculas);
}

conexionHome();
