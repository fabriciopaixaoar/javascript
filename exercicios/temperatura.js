/**
 * Exercício conversão de temperatura
 * @author Fabrício Paixão
 */

const prompt = require('prompt-sync')()

// variaveis
let c, f

// entrada
f = prompt("Digite a temperatura em Fahrenheit: ")

// processamento
c = (f - 32) * 5/9

// saída
console.log(`Temperatura:  ${c.toPrecision(3)} °C`)
console.log(typeof(c))
console.log("")

console.log(`${f}° F equivale a ${c.toPrecision(3)}° C`)





