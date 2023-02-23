function carregar(){
    var corpo = document.getElementsByTagName('body')[0]
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if(hora == 0){
        msg.innerHTML = `Agora é ${hora}, meia noite.`
        img.src = 'images/noiteP.png'
        document.body.style.backgroundColor = 'rgb(7, 28, 48)'
    }
    else if(hora >= 4 && hora < 12){
        img.src = 'images/manhaP.png'
        msg.innerHTML = `Agora são ${hora} horas da manhã.`
    }else if(hora == 12){
        msg.innerHTML = `Agora é ${hora}, meio dia.`
    }else if(hora > 12 && hora < 19){
        img.src = 'images/tardeP.png'
        msg.innerHTML = `Agora são ${hora} horas da tarde.`
        document.body.style.backgroundColor = '#b9846f'
    } else{
        img.src = 'images/noiteP.png'
        msg.innerHTML = `Agora são ${hora} horas da noite.`
        msg.innerHTML += `${sexo}`
        document.body.style.backgroundColor = 'rgb(7, 28, 48)'
    }
}