let a = 2
let b = new Number(1)
let c = 7.19
let d = "6.20"

console.log(a, b, c)

console.log(c.toFixed(1))
console.log(parseInt(c))
console.log(parseFloat(c))
console.log(typeof d)
console.log(parseFloat(d))
console.log(parseInt(d))
console.log(c + d) // 7.196.20
console.log(c + parseFloat(d)) // c + d = 13.39