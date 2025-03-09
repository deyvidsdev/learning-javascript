
// Funcion declarada
function saludar_d(){
    console.log("Saludar - declarada")
}

// funcion expresada 
const saludar_e = function(){
    console.log(`Saludar - expresada`)
}

// Arrow functions
const saludar_a = (name) => console.log(`Saludar a ${name} - arrow`)

saludar_d()
saludar_e()
saludar_a("Deyvids")

const sumar_e = function(a, b){
    return a + b
}

const sumar_a = (a, b) => a + b

console.log(sumar_e(11, 10))
console.log(sumar_a(10,8))

const functionDeVariasLinea = () => {
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

functionDeVariasLinea()

const numeros = [1, 2, 3, 4, 5]

numeros.forEach(function(el, index){
    console.log(`El elemento ${el} esta en la posicion ${index}`)
})

numeros.forEach((el, index)=>console.log(`${el} esta en la posicion ${index}`))

function Perro (){
    console.log(this)
}

Perro()

const dog = {
    nombre: "kenai",
    ladrar: function(){
        console.log(this)
    },
    comer: () => {
        console.log(this)
    }
}

dog.ladrar()
dog.comer()