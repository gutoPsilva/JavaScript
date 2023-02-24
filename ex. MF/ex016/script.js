let tab  = document.getElementById('seltab') // essas vars precisam ser globais para funcionarem nas 2 functions
let txtn = document.getElementById('txtn')
let array = []

function adicionar(){
    let n = Number(txtn.value)
    if( n >= 1 && n <= 100){
        array.push(n)
        var item  = document.createElement('option') // apenas local
        item.text = `Valor ${n} adicionado.`
        tab.appendChild(item)
        txtn.value = '' // limpa o input após adicionar
    }else{
        window.alert('Digite um valor compreendido entre 1 e 100!')
    }
}

function finalizar(){
    // total de elementos
    let res = document.getElementById('fin')
    res.innerHTML = `Ao todo, temos ${array.length} números cadastrados. <br>`

    // maior valor dentre os elementos

    // menor valor dentre os elementos

    // soma de todos os valores

    // média dos valores

}