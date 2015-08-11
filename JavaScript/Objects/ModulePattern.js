var counter = (function(){//instancia o objeto imediatamente sem a necessidade de new ou criar uma outra variavel
	var value = 0;
	return {
		add: function(){
			return ++value;
		}
	};
})();

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());