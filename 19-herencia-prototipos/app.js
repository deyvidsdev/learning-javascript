/*

    Herencia prototipica

*/

function Animal(nombre, genero){
    this.nombre = nombre
    this.genero = genero
}

Animal.prototype.sonar = function(){
    console.log("Sonar")
}

Animal.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre} y soy del genero ${this.genero}`)
}

function Perro(nombre, genero, tamano){
    this.super = Animal
    this.super(nombre, genero)
    this.tamano = tamano
}

// Perro está heredando de Animal
Perro.prototype = new Animal()
Perro.prototype.constructor = Perro
Perro.prototype.sonar = function (){
    console.log("Soy un perro wof wof")
}
Perro.prototype.ladrar = function(){
    console.log("Ladrando")
}

// Sobreescritura de métodos del prototipo padre en el hijo


const scot = new Perro("Scoot", "Masculino", "Mediano")
console.log(scot)
scot.sonar()
scot.saludar()
