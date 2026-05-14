/**
 * Estudo de array em um sistema de gestão de academia
 * @author Fabrício Paixão
 */

// importação de pacotes
const prompt = require('prompt-sync')()
const colors = require('colors')

// Variáveis globais
let nome, idade, peso, altura, vip
let matricula = 1 // contador de matrícula
let opcaoMenu, opcaoConsulta, opcaoRelatorio, busca

//Array principal (estrutura de dados)
let alunos = []

/*
    Estrutura de dados:
    [0] matricula
    [1] nome
    [2] idade
    [3] peso
    [4] altura
    [5] vip
 */

//Main >>>>>>>>>>>>>>>>>>>>>>

function mainAcademia() {
    //Menu Principal
    do {
        console.clear()
        console.log(" _____           _           _           __ _____")
        console.log("|  _  |___ ___ _| |___ _____|_|___    __|  |   __|")
        console.log("|     |  _| .'| . | -_|     | | .'|  |  |  |__   |")
        console.log("|__|__|___|__,|___|___|_|_|_|_|__,|  |_____|_____|")
        console.log("")
        console.log("1. Cadastrar aluno")
        console.log("2. Consultar alunos")
        console.log("3. Alterar aluno")
        console.log("4. Excluir aluno")
        console.log("5. Ficha do aluno")
        console.log("6. Relatórios")
        console.log("0. Sair")
        console.log("")

        opcaoMenu = Number(prompt("Escolha: "))

        switch (opcaoMenu) {
            case 1:
                cadastrarAlunos()
                break;
            case 2:
                consultarAluno()
                break;
            case 3:
                editarAluno()
                break;
            case 4:
                excluirAluno()
                break;
            case 5:
                gerarFichaAluno()
                break;
            case 6:
                gerarRelatorios()
                break;
            case 0:
                console.log("Encerrando o sistema...")
                break;
            default:
                console.log("Opção Inválida!")
                prompt("ENTER ...")
        }
    } while (opcaoMenu !== 0)
}

//Main (End) <<<<<<<<<<<<<<<<<<<<<<<



//CRUD - Create >>>>>>>>>>>>>>>>>>>>>>

function cadastrarAlunos() {
    console.clear()
    console.log(" === CADASTRO DE ALUNO ===")
    console.log("")
    //Lógica principal 
    //Captura dos dados
    nome = prompt("Nome: ")
    idade = Number(prompt("Idade: "))
    peso = Number(prompt("Peso: "))
    altura = Number(prompt("Altura em metros: "))
    vip = prompt("Aluno VIP (s/n): ")
    if (vip === "s") {
        vip = true
    } else {
        vip = false
    }

    //adicionar os dados na matriz
    alunos.push([
        matricula,
        nome,
        idade,
        peso,
        altura,
        vip
    ])
    matricula++ //autoincremento da matricula

    console.log("")
    console.log("Aluno cadastrado com sucesso!")
    console.log("")
    prompt("ENTER ...")
}

//CRUD - Create (End) <<<<<<<<<<<<<<<<<<<<<


//CRUD - Read >>>>>>>>>>>>>>>>>>>>>>

function consultarAluno() {
    // Sub menu

    do {
        console.clear()
        console.log(" === CONSULTA DE ALUNOS ===")
        console.log("")
        console.log("1. Buscar Aluno")
        console.log("2. Lista Alunos")
        console.log("0. Voltar")
        console.log("")
        opcaoConsulta = Number(prompt("Escolha: "))

        switch (opcaoConsulta) {
            case 1:
                buscarAluno()
                break;
            case 2:
                listarAlunos()
                break;
            case 0:
                break;
            default:
                console.log("")
                console.log("Opção Inválida!")
                prompt("ENTER ...")
        }
    } while (opcaoConsulta !== 0);

    //Buscar Aluno
    function buscarAluno() {
        console.clear()
        console.log("=== BUSCAR ALUNO ===")
        console.log("")

        //lógica principal (busca pelo nome)
        //.toLowerCase -> converter tudo em letras minúsculas
        busca = prompt("Digite o nome do aluno: ").toLowerCase()

        //Pesquisa(Filtro) na estrutura de dados
        let encontrados = alunos.filter((a) => {
            return a[1].toLowerCase().includes(busca)
        })

        //Validação (aluno não encontrado)
        if (encontrados.length === 0) {
            console.log("")
            console.log("Aluno não encontrado!")
        } else {
            //criando um cabeçalho para tabela
            let aluno = encontrados
                .map((a) => {
                    return {
                        Matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        VIP: a[5]
                    }
                })
            console.table(aluno)
        }
        console.log("")
        prompt("ENTER ...")
    }
    //Listar Alunos
    function listarAlunos() {
        console.clear()
        console.log("=== LISTA DE ALUNOS ===")
        console.log("")

        //Validação (se nenhum aluno for cadastrado)
        if (alunos.length === 0) {
            console.log("Nenhum Aluno cadastrado!")
        } else {
            //console.table(alunos)
            //ordenar os nome (criar cópia)
            let alunosOrdenados = [...alunos]
            alunosOrdenados.sort((a, z) => {
                return a[1].localeCompare(z[1])
            })
            //console.table(alunosOrdenados)
            //criando um cabeçalho para tabela
            let listaAlunos = alunosOrdenados
                .map((a) => {
                    return {
                        Matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        VIP: a[5]
                    }
                })
            console.table(listaAlunos)
        }
        console.log("")
        prompt("ENTER ...")
    }

}

//CRUD - Read (End) <<<<<<<<<<<<<<<<<<<<<


//CRUD - Update >>>>>>>>>>>>>>>>>>>>>>

function editarAluno() {

    console.clear()
    console.log(" === ALTERAR ALUNO ===")
    console.log("")

    prompt("ENTER ...")
}

//CRUD - Update (End) <<<<<<<<<<<<<<<<<<<<<


//CRUD - Delete >>>>>>>>>>>>>>>>>>>>>>

function excluirAluno() {

    console.clear()
    console.log(" === EXCLUIR ALUNO ===")
    console.log("")

    prompt("ENTER ...")
}

//CRUD - Delete (End) <<<<<<<<<<<<<<<<<<<<<

//Ficha do Aluno >>>>>>>>>>>>>>>>>>>>>>

function gerarFichaAluno() {

    console.clear()
    console.log(" === FICHA DO ALUNO ===")
    console.log("")

    let buscarMatricula = Number(prompt("Digite a matrícula do aluno: "))
    console.log("")

    //Lógica principal (buscar o index da estrutura de dados)
    let indice = alunos.findIndex((a) => {
        return a[0] === buscarMatricula
    })

    //Validação da busca(pelo index do array -1(vazio))
    if (indice === -1) {
        console.log("Aluno não encontrado!")
        console.log("")
    } else {
        //dados do aluno
        nome = alunos[indice][1]
        idade = alunos[indice][2]
        peso = alunos[indice][3]
        altura = alunos[indice][4]
        vip = alunos[indice][5]


        //status VIP
        let statusVip
        if (vip === true) {
            statusVip = "Sim (Direito a personal trainer)"
        } else {
            statusVip = "Não"
        }

        //cáculos
        let fcm = (208 - (0.7 * idade)).toFixed(0)
        let agua = (peso * 35) / 1000
        let imc = peso / (altura * altura)
        let pesoIdealMin = (18.5 * (altura * altura)).toFixed(1)
        let pesoIdealMax = (24.9 * (altura * altura)).toFixed(1)
        let statusImc         
        if (imc < 18.5) {
            statusImc = "Aluno esta abaixo do peso"
        } else if (imc < 25) {
            statusImc = "Aluno esta com peso normal"
        } else if (imc < 30) {
            statusImc = "Aluno esta com sobrepeso"
        } else if (imc < 35) {
            statusImc = "Aluno esta com obesidade grau I"
        } else if (imc < 40) {
            statusImc = "Aluno esta com obesidade grau II"
        } else {
            statusImc = "Aluno esta com obesidade grau III"
        }
   

        //exibição
        console.log("======================================")
        console.log("========== Ficha do Aluno ============")
        console.log("--------------------------------------")
        console.log(`Matrícula: ${buscarMatricula}`)
        console.log(`Nome: ${nome}`)
        console.log(`Idade: ${idade}`)
        console.log(`Peso: ${peso}`)
        console.log(`Altura: ${altura}`)
        console.log(`VIP: ${statusVip}`)
        console.log("")
        console.log(`FCM: ${fcm} bpm`)
        console.log(`Água recomendada: ${agua.toFixed(1)} litros/dia`)
        console.log(`IMC: ${imc.toFixed(2)} ${statusImc}`)
        console.log(`Faixa de peso ideal: ${pesoIdealMin} Kg até ${pesoIdealMax} kg`)
        console.log("======================================")
    }



    console.log("")
    prompt("ENTER ...")
}

//Ficha do Aluno (End) <<<<<<<<<<<<<<<<<<<<<


//Relatorios >>>>>>>>>>>>>>>>>>>>>>

function gerarRelatorios() {
    do {
        console.clear()
        console.log(" === RELATÓRIOS ===")
        console.log("")
        console.log("1. Aluno VIP")
        console.log("2. Média de Idade dos Alunos")
        console.log("3. % IMC dos Alunos")
        console.log("0. Voltar")
        console.log("")
        opcaoRelatorio = Number(prompt("Escolha: "))

        switch (opcaoRelatorio) {
            case 1:
                gerarRelatorioVip()
                break;
            case 2:
                gerarRelatorioMediaIdade()
                break;
            case 3:
                gerarRelatorioImc()
                break;
            case 0:
                break;
            default:
                console.log("")
                console.log("Opção Inválida!")
                prompt("ENTER ...")
        }
    } while (opcaoRelatorio !== 0);

    //Relatorio de Alunos VIP
    function gerarRelatorioVip() {
        console.clear()
        console.log("=== ALUNOS VIP ===")
        console.log("")

        prompt("ENTER ...")
    }
    //Média de Idade
    function gerarRelatorioMediaIdade() {
        console.clear()
        console.log("=== MÉDIA DE IDADES ===")
        console.log("")

        prompt("ENTER ...")
    }
    //Percentual de IMC
    function gerarRelatorioImc() {
        console.clear()
        console.log("=== % IMC DOS ALUNOS ===")
        console.log("")

        //Lógica principal (map() para obter a %imc da estrutura de dados)
        //validação


        //se nenhum aluno cadastrado
        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado")
        } else {
            let abaixoPeso = 0
            let pesoNormal = 0
            let acimaPeso = 0

            alunos.map((a) => {
                let peso = a[3]
                let altura = a[4]
                let imc = peso / (altura * altura)
                if (imc < 18.5) {
                    abaixoPeso++
                } else if (imc < 25) {
                    pesoNormal++
                } else {
                    acimaPeso++
                }
            })

            // calculos
            let total = alunos.length
            let percAbaixo = ((abaixoPeso / total) * 100)
            let percNormal = ((pesoNormal / total) * 100)
            let percAcima = ((acimaPeso / total) * 100)

            //mini grafico
            let graficoAbaixo = "■".repeat(Math.round(percAbaixo / 2))
            let graficoNormal = "■".repeat(Math.round(percNormal / 2))
            let graficoAcima = "■".repeat(Math.round(percAcima / 2))


            console.log(`Abaixo do peso: ${percAbaixo.toFixed(1)}%`)
            console.log(graficoAbaixo)
            console.log("")

            console.log(`Peso normal: ${percNormal.toFixed(1)}%`)
            console.log(graficoNormal)
            console.log("")

            console.log(`Acima do peso: ${percAcima.toFixed(1)}%`)
            console.log(graficoAcima)
            console.log("")

        }



        console.log("")
        prompt("ENTER ...")
    }
}

//Relatorios (End) <<<<<<<<<<<<<<<<<<<<<


//Iniciar Sistema >>>>>>>>>>>>>>>>>>>>>>

mainAcademia()

//Iniciar Sistema (End) <<<<<<<<<<<<<<<<<<<<<
