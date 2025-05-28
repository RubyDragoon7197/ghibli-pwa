async function General() {
    try {
        const response = await fetch('https://ghibliapi.vercel.app/films');
        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.status}`);
        }
        peliculas = await response.json();
        console.log('Películas obtenidas:', peliculas);
        mostrarPeliculas(peliculas);
    } catch (error) {
        console.error('Error al cargar la API:', error);
        const app = document.getElementById('app');
        app.innerHTML = '<p>Error al cargar las películas. Intenta nuevamente más tarde.</p>';
    }
}

function mostrarPeliculas(peliculas) {
    const app = document.getElementById('app');
    if (!peliculas.length) {
        app.innerHTML = '<p>No se encontraron películas.</p>';
        return;
    }

    app.innerHTML = peliculas.map(pelicula => `
        <div class="pelicula">
            <img src="${pelicula.image}" alt="${pelicula.title}" class="pelicula-caratula">
            <h3>${pelicula.title}</h3>
            <p>${pelicula.description}</p>
        </div>
    `).join('');
}

function buscarPeliculas(query) {
    const app = document.getElementById('app');
    if (!query.trim()) {
        app.innerHTML = '<p>Por favor, ingresa un término de búsqueda.</p>';
        return;
    }

    const peliculasFiltradas = peliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(query.toLowerCase())
    );

    if (!peliculasFiltradas.length) {
        app.innerHTML = '<p>No se encontraron películas con ese término.</p>';
        return;
    }

    app.innerHTML = peliculasFiltradas.map(pelicula => `
        <div class="pelicula">
            <img src="${pelicula.image}" alt="${pelicula.title}" class="pelicula-caratula">
            <h3>${pelicula.title}</h3>
            <p>${pelicula.description}</p>
        </div>
    `).join('');
}

function mostrarHome() {
    const app = document.getElementById('app');
    if (!peliculas.length) {
        app.innerHTML = '<p>No se encontraron películas.</p>';
        return;
    }

    app.innerHTML = peliculas.map(pelicula => `
        <div class="pelicula">
            <img src="${pelicula.image}" alt="${pelicula.title}" class="pelicula-caratula">
            <h3>${pelicula.title}</h3>
            <p>${pelicula.description}</p>
        </div>
    `).join('');
}

function mostrarDetalle() {
    // Aquí debes agregar la lógica para mostrar detalle de una película
}
