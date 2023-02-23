 let num = [5, 2, 9, 3] // criação do array

 num[4] = 6 // atribui novo elemento no índice especificado
 
num.push(8, 7) // adiciona novos elementos

num.sort() // organiza por ordem crescente, apenas 1 digito
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)

let pos = num.indexOf(3)

if(pos == -1){
    console.log('O valor não está na array')
}else{
    console.log(`O valor 3 está na posição: ${pos}`)
}