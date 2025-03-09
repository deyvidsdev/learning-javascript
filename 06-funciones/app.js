/*
    Funciones: 
        Es un bloque de codigo que se escribe una vez
        y poder reutilizarlo cuantas veces quieras.
*/

// Declaracion de funciones
function estoEsUnaFuncion(){
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

function unaFuncionQueDevuelveValor(){
    return "La funcion a retornado una cadena de texto"
}

function saludar(nombre="Desconocido", edad=0){
    // if(!nombre || !edad){
    //     console.log("No se ingreso nombre o edad")
    //     return 
    // }
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`)
}


// Invocacion de funcion
estoEsUnaFuncion()
let valorDeFuncion = unaFuncionQueDevuelveValor()
console.log(valorDeFuncion)
saludar()
// funcionDeclarada()


// Funcion declaradas vs funciones expresadas
function funcionDeclarada(){
    console.log(`Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo incluso antes de que la funcion sea declarada`)
}

// funcionDeclarada()


// funcionExpresada() 

// Funcion anónima
const funcionExpresada = function() {
    console.log("Esto es una funcion expresada es decir, una funcion que se le asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira ': Cannot access 'funcionExpresada' before initialization'")
}

funcionExpresada()