/**
 * Exercicio para aprendizagem de array
 * @author Fabrício Paixão
 */

const prompt = require("prompt-sync")()

let nipes = ['♠', '♥', '♦', '♣']
let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

let novoJogo = "n"

//console.log(`${faces[0]}${nipes[2]}`)

console.log("")

//console.log(`${faces[11]}${nipes[1]}`)

do {
    console.clear()
    console.log("Sorteio de uma carta ♠ ♥ ♦ ♣")

    prompt("Pressione a tecla [Enter] para sortear uma carta: ")

    let nipe = nipes[Math.floor(Math.random() * 4)] // 0 1 2 3
    let face = faces[Math.floor(Math.random() * 13)] // 0 1 2 3 4 ... 12

    console.log(`${face}${nipe}`)
    novoJogo = prompt("Deseja jogar novamente (s/n)? ")
    console.log("")

} while (novoJogo === "s" || novoJogo === "S")