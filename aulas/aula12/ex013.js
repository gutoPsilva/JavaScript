var agora = new Date()
var diaSem = agora.getDay() 
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch(diaSem){
    case 0: console.log('Hoje é Domingo! CARAIO')
    break
    
    case 1: console.log('Hoje é Segunda! CARAIO')
    break

    case 2: console.log('Hoje é Terça! CARAIO')
    break
    
    case 3: console.log('Hoje é Quarta! CARAIO')
    break

    case 4: console.log('Hoje é Quinta! CARAIO')
    break

    case 5: console.log('Hoje é Sexta! CARAIO')
    break

    case 6: console.log('Hoje é Sábado! CARAIO')
    break

    default: console.log('Tá perdido na vida caraio?')
}