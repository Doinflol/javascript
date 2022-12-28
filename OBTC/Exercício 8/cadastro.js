let cadastro
let imoveis = []
let propname =[]
let quartos = []
let banheiro = []
let garagem = []
let i


do {
    cadastro = prompt("Cadastro de Imóveis\nQuantidade de Imóveis: " + imoveis.length + "\n\na-) Salvar novo imóvel\nb-) Mostrar todos os imóveis\nc-) Remover Imóvel\nd-) Sair")
    switch (cadastro.toLowerCase()) {
        case "a": propname.push(prompt("Nome do proprietario:"))
        quartos.push(prompt("Quantidade de Quartos:"))
        banheiro.push(prompt("Quantidade de banheiros"))
        garagem.push(prompt("Possui garagem?"))
        imoveis.push([{propname, quartos, banheiro, garagem}])
        break

        case "b": if (imoveis.length === 0) {
            alert("Não possui imóveis cadastrados")
        } else
            for (i = 0; i < imoveis.length; i++) {
            alert("Nome do Proprietário: " + propname[i] + "\nQuantidade de quartos: " + quartos[i] + "\nQuantidade de banheiros: " + banheiro[i] +
            "\nPossui garagem? " + garagem[i])
        }
        break

        case "d": alert("Saindo...")
        break

        case "c": if (imoveis.length === 0) {
            alert("Não há imóveis cadastrados")
        } else {
                let removido = propname.pop() + quartos.pop()
                alert("Foi removido: " + removido)
        }
        break

        default: alert("Comando inválido!")
    }

} while (cadastro !== "c")