function tabuada() {
var n = window.document.querySelector('#num')
var r = window.document.querySelector('#res')
var num = Number(n.value)
r.innerHTML = ''

    for (var c = 1; c <= 10; c++) {
        var tab = c * num
        var opt = document.createElement ('option')
        opt.text = `${tab}`
        res.appendChild(opt)
        
    }
}