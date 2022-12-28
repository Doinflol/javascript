let money = 0
let continua

do {
    continua = parseInt(prompt("Escolha uma opção" +
    "\n1 - Adicionar Dinheiro" +
    "\n2 - Remover Dinheiro" +
    "\n3 - Sair"
    ))
    switch (continua) {
        case 1: 
        money += parseInt(prompt("Qual quantidade deseja adicionar?"))
        alert("Quantidade de dinheiro: " + money + " R$")
        break
        case 2: 
        money -= parseInt(prompt("Qual quantidade deseja remover?"))
        alert("Quantidade de dinheiro: " + money + " R$")
        break
        case 3:
        alert("Quantidade de dinheiro: " + money + " R$" +
        "\nSaindo")
        break
    }
    
} while (continua !== 3)
