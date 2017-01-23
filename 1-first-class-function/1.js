var hello = function(name) {
	return 'hello' + name;
};

var greeting = function(name) {
	return hello(name);
};

alert(hello);
alert(hello('World!!'));
alert(greeting('World!!'));

