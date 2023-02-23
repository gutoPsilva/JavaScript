function gerar(){
    var txtn = document.getElementById('txtn')
    var tab  = document.getElementById('seltab')
    n = Number(txtn.value)

    tab.innerHTML = '' // limpa a tabuada
    if(txtn.value.length == 0){
        window.alert('Digite um número!')
        
    }else{
        for(var i = 0; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
            item.style.padding = '2px'
        }
    }
}