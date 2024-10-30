function loginUsuario() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log(email)
    let usuario = usuarios.find((usuario) => usuario.email === email)

    if (!usuario) {
        document.getElementById("erro").innerHTML = "Usuário não encontrado";
        return;
    }

    if (usuario.senha !== senha) {
        document.getElementById("erro").innerHTML = "Senha incorreta";
        return;
    }

    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    window.location.href = "main.html"
    sessionStorage.setItem("usuarioLogado", usuario.email)
}
