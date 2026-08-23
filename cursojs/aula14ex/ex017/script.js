function contar() {
    var n = window.document.getElementById('tabuada')
    var res = window.document.getElementById('seltab')
    num = Number(n.value)

    for (var c = 1; c <= 10; c++ ){
        res.innerHTML += ` ${num} x ${c} = ${num * c} </br>` 
    }
    res.innerHTML += `FIM!`
}
