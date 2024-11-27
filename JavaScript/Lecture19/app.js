/**
 *
 *      Hoisting
 *
 * whenever you try to access a variable or a function even before it's declaration then it is called Hoisting.
 * 
 *  it is of two types:-
 *  1. General Hoisting ( happens in case of var -> undefinied );
 *  2. DTZ( dead temporal zone ) -> in case of let and constant -> you cant access becoz it is not intiallized yet { Uncaught ReferenceError: Cannot access 'a' before initialization }
 *      2.1 -> in case of MCP it got declared _____ a -> vu ____ ( value unavailable )
 *
 * =======================================================================================================
 * sam()
 * console.log(a)  --> undefined
 *
 * function sam(){
 *  ------------
 *  -------
 *  ----
 * }
 *
 * var a = 100;
 * =======================================================================================================
 *
 */

// sam();
// console.log(a);

// function sam() {
//   console.log("hello");
// }

// let a = 100;

// console.log(a);

/**
 * 
 *    ____________________ SCOPES (Aukat and Accessability) _______________________   
 * 
 *  4 types of scope 
 *  . Golabl  
 *  . function
 *  . Script  
 *  . block
 *  
 *  Case1: Kya apka var {}(block) ke andar hai (no, yes)
 *  1. NOT -> global, Script
 *      1.1-> which declarative is used 
 *          1.1.1 var -> GLOABAL
 *          1.1.2 let/const -> SCRIPT
 *  
 *  2. YES -> function, block, global
 *      2.1-> {} is made from function or not(if, for, while, etc)
 *          2.1.1 NO 
 *              2.1.1.1 VAR-> gloabal
 *              2.1.1.2 let/const -> block
 *          2.1.2 YES
 * 
 *              2.1.2.1 Var-> functional
 *              2.1.2.2 let/const -> block
 * 
 * ========================================================================
 */         


var a = 10; //gloabal
let b = 20; //script
const c = 30; //script

if(true){
  var d = 100; //gloabal
  let e = 200; //block
  const f = 300; //block
}

function sam(){
  var g = 1000; //functional
  let h = 2000; //block
  const i = 30000; //block
}
sam();