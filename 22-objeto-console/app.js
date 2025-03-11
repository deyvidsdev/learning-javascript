console.log(console)
console.error("Eso es un error")
console.warn("Eso es un aviso")
console.info("Esto es un mensaje informativo")

let nombre = "Deyvids", apellido = "Alvino", edad = 21

console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(nombre, apellido, edad);
console.log(`Hola mi nombres es ${nombre} ${apellido} y tengo ${edad} años`)

// Comodines
console.log(`Hola mi nombres es %s %s y tengo %d años`, nombre, apellido, edad) 

// console.clear() // Limpiar la consola

console.log(window)
console.log(document)

console.dir(window)
console.dir(document)


console.group("Curso de @deyvidsdev en Youtube")
console.log("Curso de JavaScript")
console.log("Curso de Python")
console.log("Curso de Odoo ERP")
console.groupEnd();

console.log(console)
console.table(Object.entries(console).sort())

const numeros = [1, 2, 3, 4, 5], vocales = ["a", "e", "i", "o", "u"]

console.table(numeros)
console.table(vocales)

const perro = {
    nombre: "Scoot",
    raza: "Boxer",
    color: "Cafe"
}

console.table(perro)

console.clear()

console.time("Cuanto tiempo tarda mi codigo")

const arreglo = Array(1000000)

for(let i = 0; i<arreglo.length; i++){
    arreglo[i] = i
}

console.timeEnd("Cuanto tiempo tarda mi codigo")

console.log(arreglo)

console.clear()

let x = 3, y = 2

pruebaXY = "Se espera que X siempre sea menor que Y"

console.assert(x<y,{x,y,pruebaXY})