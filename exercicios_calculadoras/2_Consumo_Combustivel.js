/**
 * Exercício para calcular o consumo de combustível
 * @author Fabrício Paixão
 */

const prompt = require('prompt-sync')()

let distancia, litros, consumo
console.clear()
console.log("Vamos calcular o combustivel gasto pelo veículo")
console.log("")
distancia = Number(prompt("Insira a distância pecorrida em km: "))
litros = Number(prompt("Quantos litros foram gastos? "))
console.log("")
consumo = distancia/litros
console.log(`O consumo do veículo foi ${consumo} km/L`)
console.log("")
console.log("Seu carro ta bebendo muitoooo!")