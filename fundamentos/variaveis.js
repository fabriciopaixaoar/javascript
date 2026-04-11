/**
 * Estudo das Variáveis
 * @author Fabricio Paixão
 */

console.clear()
console.log("Estudos das Variáveis")
console.log('')
console.log("Variavel do tipo String")
// a linha abaixo cria uma variavel
let nome = "Fabricio Paixão"
console.log(nome)
// a linha abaixo mostra o tipo de variavel
console.log(typeof(nome))
console.log("")
console.log("Variavel do tipo Number")
let idade = 29
console.log(idade)
console.log(typeof(idade))
let peso = 103.3
console.log(peso)
console.log(typeof(peso))
let altura = 1.73
console.log(altura)
console.log(typeof(altura))
console.log("")
console.log("Variavel do tipo Boolean")
let vip = true
console.log(vip)
console.log(typeof(vip))
let fcmax = (208 - (idade * 0.7))
console.log(fcmax)
let imc = (peso / (altura * altura))
imc.toPrecision(4)
console.log(imc.toPrecision (4))

console.log("")
console.log("-----------------------------------------")
console.log(" -             Ficha do Aluno           -")
console.log("-----------------------------------------")
// a linha abaixo concatena (união) um texto com o conteúdo da variavel
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade} anos`)
console.log(`Peso: ${peso} kg`)
console.log(`Altura: ${altura} m`)
console.log(`VIP: ${vip}`)
console.log(`FCM: ${fcmax} bpm`)
console.log(`IMC: ${imc.toPrecision(4)}`)
console.log("-----------------------------------------")
console.log("")