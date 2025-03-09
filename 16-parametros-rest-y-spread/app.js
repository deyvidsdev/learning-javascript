/*
    Parametros rest: function(a, b, ...c)
        Los parámetros rest (...) permiten a una función 
        recibir un número indefinido de argumentos y 
        agruparlos en un array.
*/

// Funciones normales
function sumar_n(a, b, ...c){
    let resultado = a + b
    c.forEach(function(n){
        resultado += n
    })
    return resultado
}

// Mendiante arrow functions
function sumar_a(a, b, ...c){
    let resultado = a + b
    c.forEach((n)=>resultado += n)
    return resultado
}

// Mediante arrow functions con for
function sumar_f(a, b, ...c){
    let restultado = a + b
    for(let i = 0; i < c.length; i++){
        restultado += c[i]
    }
    return restultado
}

console.log(sumar_n(1,2))
console.log(sumar_a(1,2,3,4,5))
console.log(sumar_f(1,2,3))

/*
    Operador Spread: 
        El operador spread (...) permite expandir 
        elementos de un array u objeto en lugares 
        donde se esperan múltiples valores.
*/

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 0]

console.log(arr1, arr2)


const arr3 = [...arr1, ...arr2]
console.log(arr3)