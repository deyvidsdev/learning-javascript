/*
    Static: 
        Son metodos que se pueden utilizar si
        necesidad de instanciar el objeto
*/

class Animal{
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }
    saludar(){
        console.log(`
            Hola, es un gusto saludarte.
            Soy un animal con y mi nombres es 
            ${this.nombre} con el genero ${this.genero}.   
        `)
    }
}

class Perro extends Animal{
    constructor(nombre, genero, color) {
        super(nombre, genero)
        this.color = color
        this.raza = null
    }
    
    static queEres(){
        console.log(`
            Los perros somos animales mamiferos
            que pertenecemos a la familia de los
            caninos. Somos considerados los mejores
            amigos del hombre.
        `);
    }

    // Metodos setters & getters
    setRaza(raza){
        this.raza = raza
    }
    getRaza(){
        return this.raza
    }
}

Perro.queEres()

const scoot = new Perro("Scoot", "Macho", "Dorado")

console.log(scoot)
scoot.setRaza("Golden retriever")
console.log(scoot)