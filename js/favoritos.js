function mostrarFavoritos() {
    const favoritos = obtenerFavoritos();
    if (!favoritos.length) {
        document.getElementById('app').innerHTML = '<p>No tienes películas favoritas.</p>';
        return;
    }

    const peliculasFavoritas = peliculas.filter(pelicula => favoritos.includes(pelicula.id));

    mostrarPeliculas(peliculasFavoritas);
}
