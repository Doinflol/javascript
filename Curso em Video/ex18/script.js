let rec = document.querySelector('#txtn')
let num = document.querySelector('#seltab')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != - 1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(rec.value) && !inLista(rec.value, valores)) {
        valores.push(Number(rec.value))
        let item = document.createElement('option')
        item.text = `Valor ${rec.value} adicionado`
        num.appendChild(item)
    } else {
        window.alert('Valor inválido ou ja encontrado na lista')
    }
    rec.value = ''
    rec.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adiciona valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        media = 0
        for(let pos in valores) {
            soma += valores [pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média de valores digitados é ${media}.`
    }
}