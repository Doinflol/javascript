function contar () {
    var ini = window.document.querySelector('#txti')
    var fim = document.querySelector('#txtf')
    var passo = document.querySelector('#txtp')
    var res = document.querySelector('#res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {    
            // Contagem Crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉 `
                    }
                res.innerHTML += `🏴`
        } else {
            //Contagem Regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉 `
                    }
                res.innerHTML += `🏴`
        }
        
    }
}
