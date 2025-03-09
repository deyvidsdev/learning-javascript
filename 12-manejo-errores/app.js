try{
    console.log("En el try se agrega el codigo a evaluar")
    noExiste
}catch(error){
    console.log("catch: captura un error en la evaluacion de try")
}finally{
    console.log("Eso se ejecuta en el final de codigo")
}

try{
    let numero = "y"
    // Validar si es un numero
    if (isNaN(numero)){
        throw new Error("El caractér introducido no es un numero");
    }
    console.log(numero * numero)
}catch(e){
    console.error(`se producto un error: ${e}`)
}