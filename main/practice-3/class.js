module.exports = class Class{
	constructor(number){
		this.number = number;
		this.member = [];
	}
	assignLeader(student){
		var count = 0;
		for(var i in this.member){
			if(this.member[i].name == student.name) count =1;
		}
		if(count){
			this.leader = student;
			return 'Assign team leader successfully.';
		}else return 'It is not one of us.';

	}
	// introduce(){
	// 	return 'My name is '+this.name+'. I am '+this.age+' years old.'+' I am a Student. I am Leader of Class '+this.klass+'.';
	// }
	appendMember(stu){
		this.member.push(stu);

	}
	hasStudent(stu){
		var temp = false;
		for(var i in this.member){
			if(this.member[i].name == stu.name) temp = true;
		}
		return temp;
	}
};