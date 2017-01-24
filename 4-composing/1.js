function multiplyByThree(x) {
    return x * 3;
};

//Create anonymous function and assign to varible..
var multiplyByThreeAnonymous = function(x) {
    return x * 3;
};

//Just like anyother value it can be pass 
var wrapMultiply = multiplyByThreeAnonymous;

wrapMultiply(10) 
// 30

//pass in for higer-order functions