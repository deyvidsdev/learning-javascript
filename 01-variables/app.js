/*
    var: Es una variable global
    let: Es una variable local o en bloque
    const: Es una constante

*/

var hola = "Hola mundo"
let hello = "Hello world"

// console.log(window)

/*
    Ejemplo de bloque con var

*/

var musica = "Rock"
console.log("Variable música antes del bloque", musica)

// Esto es un bloque {}
{
    var musica = "Pop"
    console.log("Variable música dentro del bloque", musica)
}

// El resultado es Pop porque var no respeta el bloque
console.log("Variable música despues del bloque", musica)

/*
    Ejemplo de bloque con let

*/

let color = "Azul"

console.log("Variable color antes del bloque", color)

{
    let color = "Blanco"
    console.log("Variable color dentro del bloque", color)
}

// El resultado es Azul porque let respeta el bloque
console.log("Variable color despues del bloque", color)

/*
    Constantes: Con const no se puede reasignar el valor de la variable
*/

const PI = 3.1416
console.log(PI)