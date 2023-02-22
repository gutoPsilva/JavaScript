function verificar(){
    var data = new Date() // pegar data atual
    var ano  = data.getFullYear() // pegar o ano atual
    var fAno = document.getElementById('txtano') // guardar o txt do ano
    var res  = document.querySelector('div#res') // exibir o resultado
    var idade = ano - fAno.value // calcular idade atual

    if(fAno.value.length != 4 || fAno.value > ano ){ // verifica se os dados são validos, 4 digitos e >=! do atual
        window.alert('Digite um ano válido.')
    }
    else if(idade == ano){ // easter egg Jesus, TODO ESTOURADO NA CALÇADA MEU NOBRE
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'images/jesus.jpg') 
        res.appendChild(img)

        window.alert('ENTÃO TOMA O EASTER EGG TODO ESTOURADO NA CALÇADAKKKKKKKKKKKK')
    }
    else{
        var msex = document.getElementsByName('radsex')
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(msex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <=12){
                img.setAttribute('src', 'images/hc.png')
            }
            else if(idade >=13 && idade <=21){
                img.setAttribute('src', 'images/hj.png')
            }
            else if( idade >=22 && idade <=50){
                img.setAttribute('src', 'images/ha.png')
            }
            else{
                img.setAttribute('src', 'images/hv.png')
            }
        }
        else if(msex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <=12){
                img.setAttribute('src', 'images/mc.png')
            }
            else if(idade >=13 && idade <=21){
                img.setAttribute('src', 'images/mj.png')
            }
            else if( idade >=22 && idade <=50){
                img.setAttribute('src', 'images/ma.png')
            }
            else{
                img.setAttribute('src', 'images/mv.png')
            }
        }
        res.innerHTML = `Você tem ${idade} anos e é ${genero}`
        res.style.textAlign= 'center'
        res.appendChild(img)
        img.style.margin= '10px'
    }
}