/**
 * Cálculo da média de duas notas
 * Exemploi de uso da biblioteca prompt-sync
 * @author Fabrício Paixão
 */

// importa biblioteca
const prompt = require('prompt-sync')()

// variaveis
let disciplina, nota1, nota2, media

console.clear()
console.log("Cálculo da Média de 2 notas")

// entrada de dados
disciplina = prompt("Digite o nome da disciplina: ")
console.log(disciplina)
// console.log(typeof(disciplina))
// Number converte para o tipo númerico
nota1 = Number(prompt("Digite a nota 1: "))
//console.log(nota1)
// console.log(typeof(nota1))
nota2 = Number(prompt("Digite a nota 2: "))

//processamento
media = (nota1 + nota2) / 2

//saída
console.log(`Média: ${media.toFixed(1)}`)

console.log("")
console.log("----------------------------------")
console.log("--------     BOLETIM    ----------")
console.log("")
console.log("Disciplina:              Média:   ")
console.log(`${disciplina} ------------------ ${media}`)

