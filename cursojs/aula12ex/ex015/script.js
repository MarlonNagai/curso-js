function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade < 10) {
                //crianca
                img.setAttribute('src', 'crianca-m.jpg')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
             if (idade < 10) {
                //crianca
                img.setAttribute('src', 'crianca-f.jpg')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}