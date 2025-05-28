function mostrarUsuario() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2>Perfil de Usuario</h2>
        <p>Nombre: Totoro</p>
        <p>Email: totoro@ghibli.com</p>
        <p>Películas favoritas: Mi vecino Totoro, El viaje de Chihiro</p>
    `;
}
