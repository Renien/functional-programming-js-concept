//-- Different types of parameters/arguments 
function foo(x = 3) {
    console.log(x)
}

foo();                  // 3
foo( undefined );       // 3
foo( null );            // null
foo( 0 );               // 0

//----

function fooParam(params) {
    var x = params[0];
    var y = params[1];
    console.log('x: ' + x + ' y: ' + y)
}

fooParam([1,2]);

// ----
function fooParamObject( {x,y} ) {
    console.log( x, y );
}

fooParamObject( {
    y: 3
} );  

//-- ...args usecases 'array args'
function fooArrArgs([a,b,...args]) {
    console.log(a);
    console.log(b);
    console.log(args); 
}

fooArrArgs([1,2,3,4]);

//-- ...args usecases 
function fooArgs(x,y,z,...args) {
    console.log( x, y, z, args );
}

fooArgs( 1, 2, 3, 4, 5 );
