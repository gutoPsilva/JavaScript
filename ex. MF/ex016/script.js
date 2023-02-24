let tab  = document.getElementById('seltab') // essas vars precisam ser globais para funcionarem nas 2 functions
let txtn = document.getElementById('txtn')
let res = document.getElementById('fin')
let array = []

function adicionar(){
    let n = Number(txtn.value)

    if( n >= 1 && n <= 100){
        
        array.push(n)
        var item  = document.createElement('option') // apenas local
        item.text = `Valor ${n} adicionado.`
        tab.appendChild(item)
        txtn.value = '' // limpa o input após adicionar
    }else if(txtn.value == ''){
        window.alert("Digite um valor para adicionar na tabela.")
        
    }else{ // valor < 1 ou valor >100
        window.alert('Digite um valor compreendido entre 1 e 100!')
    }

    res.innerHTML = '' // limpa as info's ao adicionar novo elemento
}

function finalizar(){
    res.innerHTML = `Ao todo, temos ${array.length} números cadastrados. <br>`

    // maior valor dentre os elementos

    // menor valor dentre os elementos

    // soma de todos os valores
    let soma = 0
    for(let pos in array){
        soma += array[pos]
    }

    res.innerHTML += `A soma de todos os números cadastrados é: ${soma}. <br>`

    // média dos valores
    let media = 0
    for(let pos in array){
        media = soma/array.length
    }
    res.innerHTML += `A média de todos os números cadastrados é: ${media}.`

}