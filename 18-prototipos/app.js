/*
    POO - Programacion orientada a objeto

    a. Clase: Modelo a seguir (Plantilla)
    b. Objeto: Es una instancia de una clase
        1. Atributos: Es una caracteristica o propiedad de un objeto (variables del objeto)
        2. Metodos: Acciones de un objeto que puede realizar (funciones del objeto)

    protipo: 
        Es un mecanismo que el cual un objeto hereda atributos y 
        metodos de un objeto padre. 
*/

const animal_t_1 = {
    nombre: "Scot",
    sonar(){
        console.log("Hago sonidos")
    }
}

const animal_t_2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Hago sonidos")
    }
}

console.log(animal_t_1)
console.log(animal_t_2)

class vivo{
    sonar(){
        console.log("Hago sonidos porque tengo vida...")
    }
}

class animal extends vivo{
    constructor(nombre, edad, cola){
        super();
        this.nombre = nombre
        this.edad = edad
        this.cola = cola
    }

    setNombre(nombre){
        this.nombre = nombre
    }

    getNombre(){
        return this.nombre
    }

    saludar(){
        console.log(`Hola, es un gusto saludarte. Soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

animal.prototype.gaa = function(){
    console.log('Suelta tu gaaa')
}

const animal_p_1 = new animal("Deyvids", 21)
console.log(animal_p_1)
animal_p_1.saludar()

const animal_p_2 = new animal("Ramces", 10)
console.log(animal_p_2)
animal_p_2.saludar()