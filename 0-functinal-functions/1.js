//Talk about parameters 
function foo(x, y) {
    return x + y;
}

var a = 3;

console.log(foo(a, a * 2));

// The arity of foo2(..) is 3
function foo2(x,y,z) {
    // ..
}

console.log(foo2.length); // 3


