var Counter = function(){
	var value = 0;
	this.add = function(){
		return ++value;
	};
};

var count = new Counter();
console.log(count.add());