let amigo = {nome:'Igor',
idade:19, 
peso:84.5, 
sexo:'M',
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)