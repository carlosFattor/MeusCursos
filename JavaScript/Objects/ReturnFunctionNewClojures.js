var helloWorld = function(){
	var message = "Hello World!";
	return function(){
		return message;
	};
};

var objHelloWorld = helloWorld();
console.log(objHelloWorld());