function mostrarPeliculas(peliculas) {
    const app = document.getElementById('app');
    if (!peliculas.length) {
        app.innerHTML = '<p>No se encontraron películas.</p>';
        return;
    }

    // Renderiza las películas con un botón de favorito
    app.innerHTML = peliculas.map(pelicula => `
        <div class="pelicula">
            <img src="${pelicula.image}" alt="${pelicula.title}" class="pelicula-caratula">
            <h3>${pelicula.title}</h3>
            <button class="favorito-btn" onclick="agregarAFavoritos('${pelicula.id}')">
                ❤️
            </button>
        </div>
    `).join('');
}
