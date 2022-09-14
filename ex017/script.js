function calcular() {
    var n = document.querySelector('#txtn')
    var res = document.querySelector('#res')
    var number = Number(n.value)
    res.innerHTML = ''
    for (var c = 0; c <= 90; c ++) {
        var tb = c * number
        var opt = document.createElement('p')
        opt.classList.add('linha')
        res.appendChild(opt)
        opt.innerHTML = `${tb}`
        
    }

    
     


}