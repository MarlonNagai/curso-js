function contar() {
    var ini = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var pas = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'impossivel contar!'
        window.alert('[ERRO] faltan dados!')
    } else {
        res.innerHTML = 'contando: '

        var inicio = Number(ini.value)
        var fim = Number(fim.value)
        var passo = Number(pas.value)
        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1 
        }
        if (inicio < fim) {
            //contagem crescente
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c}\u{1F449}`
            }
        } else {
            //contagem regressiva
            for(var c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c}\u{1F449}`
            }
        }
            res.innerHTML += `\u{1F3C1}`
    }
}