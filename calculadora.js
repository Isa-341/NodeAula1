function somar(n1,n2) {return n1 + n2}
function subtrair(n1,n2) {return n1 - n2}
function multiplicar(n1,n2){return n1 * n2}
function dividir(n1,n2){return n1 / n2}

const resultadoSoma = somar(12,8)
const resultadoMult = multiplicar(resultadoSoma,3)
const resultadoDiv = dividir(10,2)
const resultadoFinal = subtrair(resultadoMult,resultadoDiv)

console.log(`Resultado: ${resultadoFinal.toFixed(0)}`)
