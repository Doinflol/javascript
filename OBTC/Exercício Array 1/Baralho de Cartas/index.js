let baralho = []
let option
let change


do {
    option = parseInt(prompt("Cartas no baralho:\n" + baralho.length + "\n\nDigite:" + "\n1-) Adicionar uma carta" + "\n2-) Puxar uma carta" + "\n3-) Sair"))
    switch (option){
        case 1: change = baralho.unshift(prompt("Insira o nome da nova carta:"))
        break
        case 2: change = baralho.shift()
        alert("Carta puxada: " + change)
        break
        case 3: alert("Finalizando...")
        break
        default: alert("Comando Inválido!")
    }
} while (option !== 3)
