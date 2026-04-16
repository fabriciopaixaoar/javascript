/**
 * Exercício para calcular a área de um terreno
 * @author Fabrício Paixão
 */

const prompt = require('prompt-sync')()
let comprimento, largura, area
console.clear()
console.log("Vamos calcular a área do terreno")
console.log("")
comprimento = Number(prompt("Insira o comprimento do terreno em metros: "))
largura = Number(prompt("Insira a largura em metros: "))
console.log("")
area = largura * comprimento
console.log(`A área total do terreno é ${area} m²`)
console.log("")