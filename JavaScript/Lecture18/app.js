// VAR
/**
 * declaration --> var a = 10;
 * redaclaration --> var a = "him";
 * reassigne --> a = true;
 */

// LET
/**
 * declaration --> let a = 10;
 * redaclaration(not possibble in let ) --> let a = "him";
 * reassigne --> a = true;
 */

// CONST
/**
 * declaration --> let a = 10;
 * redaclaration(not possibble in const) --> let a = "him";
 * reassigne(not possible in const) --> a = true;
 */

/** IMPORTANT POINTS
 * Point 1. the shortest javascript code that exists is Empty Javascript file . (******)
 * point 2. Whenever a javascript code runs a global execution context (GEC) is created. Inside that GEC we have two phases :-
 *      2.1-> Memory Createtion phase (MCP)
 *      2.2-> Code exectuion phase (CEP)
 * Point 3. MCP runs when 0 line of code is executed i.e. before the CEP phase, the role MCP is to allocated Memory :-
 *      3.1-> to all the variable
 *      3.2-> to all the functions
 * Point 4. the role of CEP is to execute after MCP and to run the line by line
 * Point 5. All JS code is getting executed  because of call stack, GEC (Global Execution Context) is actually running inside the call stack
 * Point 6. When ever a function Executes a new execution context is created and Name of the newly created execution context (GEC) is same as that of the name of function
 * Point 7. (*) whenever GEC is created along with that Gloabal object (Window) is created.
 */

var a = 100;
function kawaii() {
  var b = 200;
  console.log(b);
  function sama() {
    var c = 300;
    console.log(c);
  }
  sama();
}
console.log(a);
kawaii();
