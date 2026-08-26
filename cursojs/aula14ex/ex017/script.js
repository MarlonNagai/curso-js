function contar() {
    var n = window.document.getElementById('tabuada')
    var res = window.document.getElementById('seltab')
    if (n.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else
        num = Number(n.value)
    res.innerHTML = ''
    for (var c = 1; c <= 10; c++ ){
        var item = document.createElement('option')
        item.text = ` ${num} x ${c} = ${num * c}`
        item.value = `tab${c}`
        res.appendChild(item)
    }
}
