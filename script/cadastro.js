function cadastrarUsuario(){
    let user = document.getElementById("user").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confimarsenha= document.getElementById("confirmar-senha").value
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    
    if (senha!=confimarsenha){
        document.getElementById("erro").innerHTML="senhas incompatíveis"
        return
    }
    
    let usuarioExistente = usuarios.find(usuario =>usuario.email===email)
    if (usuarioExistente){
        document.getElementById("erro").innerHTML="email cadastrado"
        return
    }
    let novoUser = {
        id: Date.now(),
        email: email,
        user: user,
        senha: senha,
        playlists:[],
        curtidas:[]

    }
    usuarios.push(novoUser)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    window.location.href = "login.html"
}