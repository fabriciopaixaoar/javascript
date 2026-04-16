/**
 * Estudo da estrutura de controle if else
 * Cálculo da Média
 * @author Fabrício Paixão
 */

const prompt = require('prompt-sync')()
const colors = require('colors')

let nota1, nota2, media

console.clear()
console.log("------------------------------")
console.log("------ Cálculo da Média ------")
console.log("------------------------------")
console.log("")

nota1 = Number(prompt("Digite a nota 1: "))
nota2 = Number(prompt("Digite a nota 2: "))
media = (nota1 + nota2) / 2

console.log(`A média: ${media.toFixed(1)}`)

if(media < 5){
    console.log("Reprovado".bgRed)
} else {
    console.log("Aprovado".bgGreen)
}

