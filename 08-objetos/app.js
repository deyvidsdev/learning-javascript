/*
    Objetos
*/

const b = {}
console.log(b)

const c = new Object()
console.log(c)

const persona = {
    nombre: "Deyvids",
    apellido_p: "Alvino",
    apellido_m: "Ramirez",
    edad: 20,
    pasatiempos: ["Correr", "Hacer ejercicio", "Dar clases"],
    soltero: true,
    contacto: {
        email: "deyvidsalvino@gmail.com",
        github: "deyvidsdev",
        movil: "+51 923 609 010",
    },
    saludar: function(){
        // this: sirve para acceder a los valores del objeto
        console.log(`Hola es un gusto saludarte. Soy ${this.nombre} y tengo ${this.edad} años`)
    },
    decirMiNombre: function(){
        console.log(`Mi nombre es ${this.nombre} puedes ver mi repositorio en github con el nombre ${this.contacto.github}`)
    }
}

console.log(persona.pasatiempos.length)

persona.pasatiempos.forEach(function (item){
    console.log(`El pasatiempo es ${item}`)
})

persona.pasatiempos.forEach( (el, index) => console.log(`El pasatiempo es ${el}`))

persona.pasatiempos.forEach( (el, index) => {
    console.log(`El pasatiempo es ${el} con posicion ${index}`)
})

console.log(persona)
persona.saludar()
persona.decirMiNombre()

// Ambos retornan una lista
console.log(Object.keys(persona)) // Para obtener key del objeto
console.log(Object.values(persona)) // Para obtener los values del objeto

// hasOwnProperty: Sirve para buscar si una key existe en el objeto
console.log(persona.hasOwnProperty("nombre")) 
console.log(persona.hasOwnProperty("gaa"))