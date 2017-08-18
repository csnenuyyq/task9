const Person = require('./person');

module.exports = class Student extends Person{
	constructor(name,age,clazz){
		super(name,age);
		this.clazz = clazz;
	}
	introduce(){
		var count = 0;
		for(var i in this.clazz.member){
			if(this.clazz.member[i].name==this.name) count = 1;
		}
		if(count==0){
			return 'My name is '+this.name+'. I am '+this.age+' years old.'+" I am a Student. I haven't been allowed to join Class.";
		}
	    if(this.clazz.leader==undefined) return 'My name is '+this.name+'. I am '+this.age+' years old.'+' I am a Student. I am at Class '+this.clazz.number+'.';
		if(this.name == this.clazz.leader.name){
			return 'My name is '+this.name+'. I am '+this.age+' years old.'+' I am a Student. I am Leader of Class '+this.clazz.number+'.';
		}else {
			return 'My name is '+this.name+'. I am '+this.age+' years old.'+' I am a Student. I am at Class '+this.clazz.number+'.';
		}
	}
}