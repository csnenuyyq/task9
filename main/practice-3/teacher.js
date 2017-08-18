const Person = require('./person');

module.exports = class Teacher extends Person{
	constructor(name,age,clazzes){
		super(name,age);
		this.clazzes = clazzes;
	}
	introduce(){
		if(this.clazzes.length==0){
			return 'My name is '+this.name+'. I am '+this.age+' years old.'+' I am a Teacher. I teach No Class.';
		}else{
		    var classes = '';
		    for(var i in this.clazzes){
		        classes += this.clazzes[i].number + ',';
		    }
		    classes = classes.substring(0,classes.length-1);
			return 'My name is '+this.name+'. I am '+this.age+' years old.'+' I am a Teacher. I teach Class '+classes+'.';
		}
		
	}
	isTeaching(stu){
		var temp = false;
		for(var i in clazzes){
			if(clazzes[i].hasStudent(stu)) temp = true;
		}
		return temp;
	}
}

