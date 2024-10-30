function cadastrarMusica(titulo, artista, genero, duracao, link) {
    const musica = {
        titulo: titulo,
        artista: artista,
        genero: genero,
        duracao: duracao,
        link: link
    };

    let listaMusicas = JSON.parse(localStorage.getItem('musicas')) || [];

    listaMusicas.push(musica);

    localStorage.setItem('musicas', JSON.stringify(listaMusicas));

    exibirMusicas();
}

function exibirMusicas() {
    const listaMusicas = JSON.parse(localStorage.getItem('musicas')) || [];

    const containerMusicas = document.getElementById('lista-musicas');

    containerMusicas.innerHTML = '';

    listaMusicas.forEach(musica => {
        const musicaElement = document.createElement('div');
        musicaElement.innerHTML = `
            <h3>${musica.titulo}</h3>
            <p>Artista: ${musica.artista}</p>
            <p>Gênero: ${musica.genero}</p>
            <p>Duração: ${musica.duracao} minutos</p>
            <a href="${musica.link}">Ouvir</a>
        `;
        containerMusicas.appendChild(musicaElement);
    });
}
window.onload = exibirMusicas;

let musicaCadastrada = sessionStorage.getItem("musicaCadastrada")
    function logout() {
        sessionStorage.removeItem("musicaCadastrada")
        window.location.href = "main.html"
    }