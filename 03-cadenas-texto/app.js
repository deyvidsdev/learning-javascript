/*
    Cadenas de texto: Tienes sus propiedades y metodos:
*/

let nombre = "Deyvids"
let apellido = 'Alvino'
let saludo = new String("Hola mundo")
let lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ipsa repellendus error, adipisci laudantium doloremque repudiandae tenetur eligendi, consequatur, soluta magnam corrupti aut ratione maxime et neque asperiores optio incidunt."

console.log(nombre.slice())

console.log(nombre, apellido, saludo)
console.log(nombre.length, apellido.length, saludo.length)
console.log(nombre.toUpperCase(), apellido.toLowerCase(), saludo.toUpperCase())
console.log(lorem.includes("amet")) // Busca si la cadena tiene un texto en especifico
console.log(lorem.trim()) // Elimina los espacios en blanco
console.log(lorem.split(","))