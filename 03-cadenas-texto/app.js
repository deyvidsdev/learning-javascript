/*
    Cadenas de texto: Tienes sus propiedades y metodos:
*/

let nombre = "Deyvids"
let apellido = 'Alvino'
let helloworld = new String("Hola mundo")
let lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ipsa repellendus error, adipisci laudantium doloremque repudiandae tenetur eligendi, consequatur, soluta magnam corrupti aut ratione maxime et neque asperiores optio incidunt."

console.log(nombre.slice())

console.log(nombre, apellido, helloworld)
console.log(nombre.length, apellido.length, helloworld.length)
console.log(nombre.toUpperCase(), apellido.toLowerCase(), helloworld.toUpperCase())
console.log(lorem.includes("amet")) // Busca si la cadena tiene un texto en especifico
console.log(lorem.trim()) // Elimina los espacios en blanco
console.log(lorem.split(","))


/* Tipo de concadenación */

/*
    Concadenación
*/

let saludo_c = "Hola mi nombre es " + nombre + " " + apellido + "."
console.log(saludo_c)

/*
    Interpolación: Template String
*/

let saludo_i = `Hola mi nombre es ${nombre} ${apellido}.`
console.log(saludo_i)