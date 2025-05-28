function mostrarFavoritos() {
    const favoritos = obtenerFavoritos();
    if (!favoritos.length) {
        document.getElementById('app').innerHTML = '<p>No tienes películas favoritas.</p>';
        return;
    }

    // Filtra las películas favoritas de la lista completa
    const peliculasFavoritas = peliculas.filter(pelicula => favoritos.includes(pelicula.id));

    mostrarPeliculas(peliculasFavoritas);
}
