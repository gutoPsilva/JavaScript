function carregar(){
    var corpo = document.getElementsByTagName('body')[0]
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 4 && hora <= 12){
        img.src = 'images/manhaP.png'
    }else if(hora > 12 && hora < 19){
        img.src = 'images/tardeP.png'
        document.body.style.backgroundColor = '#b9846f'
    } else{
        img.src = 'images/noiteP.png'
        document.body.style.backgroundColor = 'rgb(7, 28, 48)'
    }
}