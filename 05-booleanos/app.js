/*
    Booleanos
*/

let verdadero = true
let falso = false


let v = Boolean(true)

console.log(verdadero, falso, v)

console.log(Boolean(0)) // Falso
console.log(Boolean(-1)) // Verdadero
console.log(Boolean("")) // Falso
console.log(Boolean(" ")) // Verdadero

/* Ambos valores significa que estan vacias */

// undefine valor definido
let indefinida // Valor asignado por javascript: No inicializado

console.log(indefinida)

// null - Ausencia de un valor

let nulo = null // Valor asignado por un programador: Vacia por asignación del programador 

console.log(nulo)

// Nan - Not a Number
let noEsUnNumero = parseInt("") // or "hola" * 3.7

console.log(noEsUnNumero)