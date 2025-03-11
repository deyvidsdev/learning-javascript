/*
    Clases y herencias
*/

class Animal{
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }

    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} es un gusto saludarte.`)
    }
}

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero)
        this.tamanio = tamanio
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido")
    }

    ladrar(){
        console.log("Guauuu Guauuu!!")
    }
}

const mimi = new Animal("Mimi", "Hembra")
const scoot = new Perro("Scoot", "Macho", "Gigante")

console.log(mimi)
mimi.sonar()
mimi.saludar()

console.log(scoot)
scoot.sonar()
scoot.ladrar()