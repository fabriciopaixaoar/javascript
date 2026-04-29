/**
 * Estudos das Funções
 * @author  Fabrício Paixão
 */

// Função Literal (simples) >>>>>>>>>>>>>>>>

function hello (){
    console.clear()
    console.log("Hello Function")
    console.log("Tipo: " + typeof (hello)) // apoio ao entendimento da lógica
    console.log("")
}

// Para executar uma função basta "chamar" o nome da função, não esquecendo dos parênteses
hello()


// Função anônima >>>>>>>>>>>>>>>>>

const hello2 = function () {
    console.log("Hello function assigned")
    console.log("Tipo: " + typeof (hello2))
    console.log("")
}

hello2()

// Função anônima simplificada >>>>>>>>>>>>>>>>>

const hello3 = () => {
    console.log("Hello Arrow function assigned")
    console.log("Tipo: " + typeof (hello3))
    console.log("")    
}

hello3 ()

// Função simples com parametros >>>>>>>>>>>>>>>>>

function somar(num1, num2) {
    console.log("Tipo: " + typeof (somar))
    console.log("")
    return (console.log(num1 + num2))
}

// Neste caso dentro de parênteses, fornecemos os números que serão somados na função
somar(2, 3)

console.log("")

// Função anônima com parâmentros >>>>>>>>>>>>>>>>>

const somarA = function(num1, num2) {
    console.log("Tipo: " + typeof (somarA))
    console.log("")
    return (console.log(num1 + num2))    
}

somarA(6, 7)

console.log("")

// Função anônima simplificada com parâmentros >>>>>>>>>>>>>>>>>

const somarAF = (num1, num2) => {
    console.log("Tipo: " + typeof (somarAF))
    console.log("")
    return (console.log(num1 + num2))  
}

somarAF(8, 8)

console.log("")

// Função anônima super simplificada com parâmentros >>>>>>>>>>>>>>>>>

// CUIDADO!! Nesse caso o retorno é implícito
const somarAFS = (num1, num2) => (console.log(num1 + num2))

somarAFS(2, 7)

console.log("")

