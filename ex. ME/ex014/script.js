function calcular(){
    var txti = document.getElementById('txtini')
    var txtf = document.getElementById('txtfim')
    var txtp = document.getElementById('txtpas')
    var res  = document.getElementById('res')
    var i = Number(txti.value)
    var f = Number(txtf.value)
    var p = Number(txtp.value)

    if(txti.value.length == 0){
        res.innerHTML = 'Impossível contar, coloque um valor de inicio.'
    } else if(p == 0){
        res.innerHTML = 'Valor mínimo do passo é 1!'
    } else if(i > f){
        res.innerHTML = 'O fim deve ser maior que o início.'
    } 
    else{
        res.innerHTML = `Contando: <br>`
        while(i <= f){
            res.innerHTML += `${i} &#x1F449 `
            i += p
        }
        res.innerHTML += '&#x1F3C1'
    }

    // estrutura de repetição a ser feita
}