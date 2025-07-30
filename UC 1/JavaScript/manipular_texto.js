
    // let idade = parseInt(prompt("Digite a sua idade: "))

    // if(idade >= 18) {
    //     alert("Você já pode tirar CNH")
    // } else {
    //     alert("Você ainda é menor de idade e não pode tirar CNH!")
    // }



//Atividade 1 - Crie um programa que pergunte dois números e mostre-os em ordem CRESCENTE (do menor para o maior)

    // let num1 = parseInt(prompt("Digite o primeiro número:"))
    // let num2 = parseInt(prompt("Digite o segundo número:"))

    // if(num1 > num2){
    //     alert("Ordem crescente: "+num2+", "+num1)
    // } else {
    //     alert("Ordem crescente: "+num1+", "+num2)
    // }

// Atividade 2 - Crie um programa que pergunte um número para o usuário e diga se este número é negativo ou positivo

    // let numero = parseInt(prompt("Digite um número"))

    // if(numero < 0) {
    //     alert("Este número é negativo")
    // } else {
    //     alert("Este número é positivo")
    // }

// Atividade 3 - Crie um programa que pergunte duas notas de um aluno.
// Faça a média das notas e informe se o aluno está aprovado ou reprovado. A média para passar de ano é 7.

    // let nota1 = parseFloat(prompt("Digite a primeira nota: "))
    // let nota2 = parseFloat(prompt("Digite a segunda nota: "))

    // let media  = (nota1 + nota2) / 2

    // if (media < 7) {
    //     alert("O aluno está reprovado")
    // } else {
    //     alert("O aluno está aprovado!")
    // }



function testeReturn(){

    let numero = parseInt(prompt("Digite o número 3"))

    if(numero == 3){
        alert("Parabéns, você escreveu o número certo!")
    } else {
        alert("Número inválido!")
        return // para de rodar o sistema
    }

    let resposta = prompt("Digite batata")

    if (resposta == "batata"){
        alert("Parabéns, você escreveu a resposta certa!")
    } else {
        alert("Resposta inválida!")
        return
    }

    alert("Fim do sistema")
}