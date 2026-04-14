/**
 * Exercício para calcular o volume de um aquário
 * @author Fabrício Paixão
 */

const prompt = require('prompt-sync')()

//variaveis 
let compimento, largura, altura, volume

console.clear()

console.log("Vamos calcular a quantidade de litro do aquário")

//entrada
comprimento = prompt("Digite o valor do comprimentro em cm: ")
largura = prompt("Digite o valor da largura em cm: ")
altura = prompt("Digite o valor da altura em cm: ")

//processamento
volume = (comprimento * largura * altura) / 1000

//saída
console.log("")
console.log(`O volume do aquário é: ${volume} Litros de água`)