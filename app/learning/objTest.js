//构造函数
var uu1 = function(name,age){
	this.name = name;
	this.age = age;
	//方法
	this.eatSomething = function(){
		console.log(this.name + 'eat something');
	}
}
//当new一个新uu1时会开辟新的内存空间，而属性是引用最初的，

//对象
var uu2 = {
	name: '',
	age: '',
	//方法
	eatSomething: function(){
		console.log(this.name + 'eat something');
	}
}

//构造函数
var uu3 = function(name,age){
	this.name = name;
	this.age = age;
}
//原型
uu3.prototype.eatSomething = function(){
	console.log(this.name + 'eat something');
}
//当new一个新uu3时会开辟新的内存空间，不包括原型

var uu4 = function(name,age){
	var man = {
		'name': name,
		'age': age
	}
	return function(){
		return man;
	}
}
//每次调用都创建一个新的内存区域。

function synFun(name,age,callNameFun){
	var _name = name;
	var _age = age;
	return callNameFun(_name,age);
}
synFun('uu','12',function(name,age){console.log(name,age)});

