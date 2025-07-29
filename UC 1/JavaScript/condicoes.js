esconderTudo()

function salvarIdade() {
    // let idade = document.querySelector("#inputIdade").value
    // idade = parseInt(idade)

    let idade = parseInt(document.querySelector("#inputIdade").value)

    //Condições

    if (idade >= 18) {
        alert("Você já pode tirar CNH!")
    } else {
        alert("Você ainda é menor de idade!")
    }

}

function salvarSenha() {

    let senha = document.querySelector("#inputSenha").value

    //Condições

    if (senha == "admin") {
        alert("Acesso concedido!")
        mostrarTermos()
    } else {
        alert("Senha incorreta!")
    }

}

function salvarTermos() {
    let termos = document.querySelector("#inputTermos").checked 

    if(termos == false) {
        document.querySelector("#statusTermos"). innerHTML = "Aceite os termos antes de continuar"
    } else {
        document.querySelector("#statusTermos"). innerHTML = "Termos aceitos!"
    }
}

function esconderTudo() {
    document.querySelector("#termos").style.display = "none"

}

function mostrarTermos () {
    document.querySelector("#termos").style.display = "block"
}

