/*
    Arreglos
*/

const a = []
const b = [1, true, "Hola mundo", ["A", "B", "C"]]

console.log(a)
console.log(b)
console.log(b[2])
console.log(b[3][2])
console.log(b.length)

const c = Array.of("X", "Y", "Z", 9, 8, 7)
console.log(c)

const d = Array(100).fill(false)
console.log(d)

const e = new Array()
console.log(e)

const f = new Array(1, 2, 3, true, false)
console.log(f)

const colores = ["Rojo", "Verde", "Azul"]
console.log(colores)
colores.push("Negro") // Agrega u elemento al final
console.log(colores)
colores.pop() // Quitar el ultimo elemento
console.log(colores)

colores.forEach(function(el, index){
    console.log(`<li id=${index}>${el}</li>`)
})

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
const newNumbers_1 = numbers.map((n)=>{
    return n * 2
})
const newNumbers_2 = numbers.map(n => n * 2)
console.log(newNumbers_1)
console.log(newNumbers_2)