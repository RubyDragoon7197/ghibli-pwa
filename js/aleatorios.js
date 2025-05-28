async function mostrarAleatorios() {
    try {
        const peliculas = await conexionHome();
        const peliculaAleatoria = peliculas[Math.floor(Math.random() * peliculas.length)];
        const app = document.getElementById('app');
        app.innerHTML = `
            <h2>Película Aleatoria</h2>
            <div class="c-lista-pokemon">
                <h3>${peliculaAleatoria.title}</h3>
                <p>${peliculaAleatoria.description}</p>
            </div>
        `;
    } catch (error) {
        console.error('Error al mostrar película aleatoria:', error);
    }
}
