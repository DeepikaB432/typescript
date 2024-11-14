class Person {
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullname() {
        return this.firstName + ' ' + this.lastName;
    }
}

var p:Person = new Person('Deepika','Bansal')
var p2:Person = new Person('Caffy','Bansal')
var p3:Person = new Person('Sam','T')
var p4:Person = new Person('Test','User')

var full_name = p.fullname();
var full_name2 = p2.fullname();
var full_name3 = p3.fullname();
var full_name4 = p4.fullname();

console.log(full_name)
console.log(full_name2)
console.log(full_name3)
console.log(full_name4)

console.log(p)

class Male extends Person {
    age:number;

    constructor(firstName:string,lastName:string,age:number){
        super(firstName,lastName)
        this.age = age;
    }
}

var male = new Male('D','Bansal',27)
console.log(male.fullname())
