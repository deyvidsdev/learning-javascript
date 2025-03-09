/*
    while:
        Se ejecuta mientras la condición sea true. Si 
        la condición nunca se cumple, el bloque nunca se 
        ejecuta.

    do while: 
        Primero ejecuta el bloque al menos una vez, 
        luego verifica la condición.

*/

let contador_a = 10;
let contador_b = 10;


while (contador_a < 10){
    console.log("while: " + contador_a)
    contador_a++
}

do{
    console.log("do while: " + contador_b)
    contador_b++
}while(contador_b < 10)


/*
    for: 
        Es un bucle estructurado que se ejecuta 
        un número fijo de veces.
*/

for(let i = 0; i<=10; i++){
    console.log("i:" +i)
}

for(let b = 0; b<10; b++){
    console.log("b:" + b)
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]

for(let i = 0; i < numeros.length; i++){
    console.log(`indice: ${i} - valor: ${numeros[i]}`)
}


/*
    for in: El bucle for...in se usa para recorrer las propiedades de un objeto.
*/

const persona = {
    nombre: "Deyvids",
    apellido: "Alvino Ramirez",
    edad: 21
}

for(const key in persona){
    console.log(`Key: ${key}, value:${persona[key]}`)
}

/*
    for of: El bucle for...in se usa para recorrer los elemetos de un objeto.
*/

for(const iterador of numeros){
    console.log(iterador)
}

let cadena = "Hola mundo"
for(const iterador of cadena){
    console.log(iterador)
}