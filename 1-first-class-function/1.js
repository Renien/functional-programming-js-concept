var hello = function(name) {
	return 'hello' + name;
};

var greeting = function(name) {
	return hello(name);
};

console.log(hello);
console.log(hello('World!!'));
console.log(greeting('World!!'));

