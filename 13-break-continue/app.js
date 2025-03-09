/*
    break: Sale de la estructura de control
    continue: Se salta la interacion por una condicional
*/


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

for(let i=0; i<= numeros.length; i++){
    if(i===5)break
    console.log(numeros[i])
}

for(let i=0; i < numeros.length; i++){
    if(numeros[i] % 2 == 1)continue
    console.log("numeros: "+ numeros[i])
}