/*
    Operadores
*/


/*
    Aritméticos

    +: Suma 
    -: Resta 
    *: Multiplicacion 
    /: Division 
    %: Modulo 
    (): Prioridad
*/

let a = 5 + 5 - 10 * 3
// console.log(a)

let modulo = 5 % 2 // impar
// console.log(modulo)

let modulo_2 = 10 % 2 // Par
// console.log(modulo_2)

/*
    Relacionales

    >: Mayoer
    <: Menor
    >=: Mayor o igual
    ==: Igual a valor a comprar
    ===: Igual al valor y tipo de dato
    !=: diferente en valor
    !==: diferente  en valor y tipo de dato
*/

console.log(8 > 9)
console.log(9 >= 9)
console.log(7 < 7)
console.log(7 <= 7)

/*
 =: Asignacion de variable
 ==: Iguales en comparacion de valores
 ===: Iguales en compracion de valor y tipo de dato
*/

console.log("7" == 7)
console.log("7" === 7)

/*
    Acumuladores

    +=: Incremento
    -=: Decremento
    *=: Multiplicar
*/

let i = 1
i+=1
console.log(i)
i = i + 1
console.log(i)

/*
    Operadores unario
*/

i++
i--
++i
--i

/*
    Operadores Logicos
    !: not 
    ||: or
    &&: and 
*/

console.log(true) // true
console.log(!true) // false
console.log(!false) // true