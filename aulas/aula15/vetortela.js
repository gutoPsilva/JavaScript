let valores = [8, 1, 7, 4, 2, 9]

// versão mais simplificada de percurso de array
for(let pos in valores){
    valores.sort() // organiza a cada incremento
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}

/* 
percurso de array raíz

for(let pos = 0; pos < valores.length; pos++){
    valores.sort() // organiza em ordem crescente a cada incremento
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}

o for acima de "3" linhas simplificou essa de 6 abaixo.

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) 
*/