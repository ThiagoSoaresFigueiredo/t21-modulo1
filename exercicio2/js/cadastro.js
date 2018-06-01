class Cadastro {

    // Lê e valida os dados do formulário
    validar() {
        // Leitura dos campos
        let nome = document.getElementById("nome").value
        let email = document.getElementById("email").value
        let sexo = document.querySelector("[name=sexo]:checked")
        let curso = document.querySelector("[name=curso]:checked")
        let estado = document.getElementById("estado").value
        let foto = document.getElementById("foto").files[0]

        let mensagemDeValidacao = ""

        // Validação dos campos
        if (nome == "") {
            mensagemDeValidacao += "Nome deve ser preenchido \n"
        }

        if (email == "") {
            mensagemDeValidacao += "Email deve ser preenchido \n"
        }

        if (sexo == null) {
            mensagemDeValidacao += "Sexo deve ser preenchido \n"
        }

        if (curso == null) {
            mensagemDeValidacao += "Curso deve ser escolhido \n"
        }

        if (estado == "") {
            mensagemDeValidacao += "Estado deve ser escolhido \n"
        }

        if (foto == undefined) {
            mensagemDeValidacao += "Foto deve ser selecionada \n"
        } else if (foto.size > 1048576) {
            mensagemDeValidacao += "Foto deve ter tamanho máximo de 1MB \n"
        } else if (foto.type != "image/png" && foto.type != "image/jpeg") {
            mensagemDeValidacao += "Foto deve ser no formato .PNG ou .JPEG ou .JPG \n"
        }

        // Mostrando mensagem de validação
        if (mensagemDeValidacao != "") {
            document.getElementById("textoDaMensagem").innerText = mensagemDeValidacao
            document.getElementById("mensagem").classList.add("mostrarMensagem")
        }
    } //validar()

}

var cadastro = new Cadastro()