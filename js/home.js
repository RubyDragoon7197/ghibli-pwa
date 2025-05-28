async function General() {
    try {
        // URL oficial de la API de Studio Ghibli
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.status}`);
        }
        const peliculas = await response.json();

        // Agrega el console.log aquí
        console.log('Películas obtenidas:', peliculas);

        mostrarPeliculas(peliculas); // Renderiza las películas en la página
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

    // Renderiza las películas en tarjetas con imágenes
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

// Mostrar todas las películas al presionar "Home"
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

// Mostrar una película aleatoria al presionar "Aleatorios"
function mostrarAleatorios() {
    const app = document.getElementById('app');
    if (!peliculas.length) {
        app.innerHTML = '<p>No se encontraron películas.</p>';
        return;
    }

    const peliculaAleatoria = peliculas[Math.floor(Math.random() * peliculas.length)];
    app.innerHTML = `
        <div class="pelicula">
            <img src="${peliculaAleatoria.image}" alt="${peliculaAleatoria.title}" class="pelicula-caratula">
            <h3>${peliculaAleatoria.title}</h3>
            <p>${peliculaAleatoria.description}</p>
        </div>
    `;
}
