const {cons, first, rest, isEmpty, isList, length} = require('functional-light');


/**
 * @author: Marcela Rivas
 * Date: 14/04/2020
 * Contrato:<uno> <numero><numero><numero> --> <numero>
 * este programa recibe expresion y la calcula
 * @example
 *  //return -2.25
 * uno(0, 0, 1)
 */
const uno = (x, y , z) =>{
  var primero = (Math.pow(x, 2)+(8*y)-(9*z))/((4*z)+(6*x)+Math.pow(y, 2))
  return primero
}
console.log(uno(1, 1, 1))
console.log(uno(1, 1, 0))
console.log(uno(0, 0, 0))
console.log(uno(0, 0, 1))

/**
 * @author: Marcela Rivas
 * Date: 14/04/2020
 * Contrato:<dos> <bool><bool><bool> --> <bool>
 * este programa recibe expresion y la calcula
 * @example
 *  //return true
 * dos(true, true, true)
 */
const dos = (x, y , z) =>{
  var segundo = (z || y || (x && y))
    return segundo
}
console.log(dos(true, true, false))
console.log(dos(true, true, true))
console.log(dos(false, false, false))
console.log(dos(false, true, false))

/**
 * @author: Marcela Rivas
 * Date: 14/04/2020
 * Contrato:<tres> <numero><numero><numero> --> <string>
 * este programa recibe expresion y la calcula
 * @example
 *  //return primero, primero, cuarto
 * tres(2,2,2,8,2,-6)
 */












var t0 = 0; 
var tN= 30; 
var n = 1000; 
var h=(tN-t0)/n;

const problema = (conejos, lobos)=>{
var a = 2*conejos; 
var b = lobos*0.3; 
var c = 0.3; 
var d = 0.05; 
  return (a*conejos)-(c*conejos)*(lobos)-b*(lobos)+d*(lobos)*(conejos)
};


console.log(problema(100, 100))


var sum= (x)=> (x == 1) ? 6 : (x*(x+1)*(2*x + 1)) + sum(x-1)
var prueba= (x) =>(x == 1) ? "Verdad": "Falso"
console.log(sum(52))
console.log(sum(5))
console.log(prueba(2))