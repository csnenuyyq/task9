const Person = require('./person');

module.exports = class Student extends Person{
	constructor(name,age,clazz){
		super(name,age);
		this.clazz = clazz;
	}
	introduce(){
	    if(this.clazz.leader==undefined) return 'My name is '+this.name+'. I am '+this.age+' years old.'+' I am a Student. I am at Class '+this.clazz.number+'.';
		if(this.name == this.clazz.leader.name){
			return 'My name is '+this.name+'. I am '+this.age+' years old.'+' I am a Student. I am Leader of Class '+this.clazz.number+'.';
		}else {
			return 'My name is '+this.name+'. I am '+this.age+' years old.'+' I am a Student. I am at Class '+this.clazz.number+'.';
		}
	}
}