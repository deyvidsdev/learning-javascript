/*
    Destructurar
*/

const numeros = [1, 2, 3]

// Sin destructuración

let uno=numeros[0],
    dos=numeros[1], 
    tres=numeros[2]

// Con destructuración

const [a, b] = numeros
console.log(`${a} o ${uno}`)

const person = {
    nombre: "Deyvids",
    apellido: "Alvino Ramirez",
    edad: 20
}

const {nombre, apellido, edad } = person
console.log(`Hola ${nombre} ${apellido}`)