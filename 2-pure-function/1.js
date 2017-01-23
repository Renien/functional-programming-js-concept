var xs = [1, 2, 3, 4, 5];

// pure
alert(xs.slice(0, 3));
alert(xs.slice(0, 3));
alert(xs.slice(0, 3));

// impure
alert(xs.splice(0, 3));
alert(xs.splice(0, 3));
alert(xs.splice(0, 3));


// impure
var minimum = 21;

var checkAge = function(age) {
  return age >= minimum;
};

// pure
var checkAge = function(age) {
  var minimum = 21;
  return age >= minimum;
};