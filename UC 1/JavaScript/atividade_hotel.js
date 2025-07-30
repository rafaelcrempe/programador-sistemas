
function reservaHotel() {

let mes = prompt("Digite o mês da hospedagem (10, 11 ou 12): ")

if (mes < 10 && mes > 12 ){
    alert("Mês inválido")
    return
}

let quantidade_adultos = parseInt(prompt("Digite a quantidade de adultos: "))

if(quantidade_adultos <= 0){
    alert("Quantidade inválida de adultos!")
    return
}

const base_quarto = 150
const custo_adulto = 85

let quantidade_criancas = parseInt(prompt("Digite a quantidade de crianças:"))

const custo_crianca = custo_adulto / 2

prompt("Utilizar o cupom MENOS10 para obter 10% de desconto?")


let custo_total = base_quarto + (quantidade_adultos * custo_adulto) + (custo_crianca * quantidade_criancas) + base_quarto



console.log("-----------------------------")
console.log("------ HOTEL DO RAFAEL ------")
console.log("Mês da hospedagem: "+ mes)
console.log("-----------------------------")
console.log("Preço base do quarto: R$ "+ base_quarto+ ",00")
console.log("Adultos: "+ quantidade_adultos+ "x R$ "+custo_adulto+",00")
console.log("Crianças: "+ quantidade_criancas+ "x R$ "+custo_crianca+",00\n\n")
console.log("Total: R$"+custo_total)
console.log("-----------------------------")


}