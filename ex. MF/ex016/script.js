let tab  = document.getElementById('seltab') // essas vars precisam ser globais para funcionarem nas 2 functions
let txtn = document.getElementById('txtn')
let res = document.getElementById('fin')
let array = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n <= 100)){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    let n = Number(txtn.value)

    if(isNumero(txtn.value) && !inLista(txtn.value, array)){
        array.push(n) // adiciona o valor
        var item  = document.createElement('option') 
        item.text = `Valor ${n} adicionado.`
        tab.appendChild(item)
        txtn.value = '' // limpa o input após adicionar

    }else if(txtn.value == ''){
        window.alert("Digite um valor para adicionar na tabela.") 
    }else if(isNumero(txtn.value) == false){
        window.alert("Número inválido.")
    } else{
        window.alert("Número já está na tabela.")
    }

    res.innerHTML = '' // limpa as info's ao adicionar novo elemento
}

function finalizar(){
    if(array.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
    
    let maior = array[0]
    let menor = array[0]
    let soma = 0
    let media = 0
    // percurso que verifica todos os valores dentro do array
    for(let pos in array){
        soma += array[pos] // soma dos valores
        media = soma/array.length // média dos valores

        if(array[pos] > maior){ // maior valor
            maior = array[pos]
        }
        if(array[pos] < menor){ // menor valor
            menor = array[pos]
        }
    }

    res.innerHTML = `Ao todo, temos ${array.length} números cadastrados. <br>`
    res.innerHTML += `O maior valor dentre os elementos é: ${maior}.<br>`
    res.innerHTML += `O menor valor dentre os elementos é: ${menor}.<br>`
    res.innerHTML += `A soma de todos os números cadastrados é: ${soma}.<br>`
    res.innerHTML += `A média de todos os números cadastrados é: ${media}.`

    }
}