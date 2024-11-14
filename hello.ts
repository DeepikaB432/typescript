// String Example
var test:string = 'test value';
//Number Example
var val:number = 10;

test = 'hello there'
val = 100;

var is_true:boolean = true;

//Array only containing String
var user:string[]= ["Andy","Sam","george","Harsh"];

//to allow string and number values
var str_num_arr:(string|number|boolean)[] = [1,'Array example',true];

// in case you are not sure about type

var array_example:any = [1,'Testing',true]

var str_num_arr_2:[string,number] = ['Array Example',1];

var obj_example:{id: number, name:string} = {id:1,name:'Deepika'};

var student:{id: number, name:string} = {id:1,name:'Deepika'};

type student = {
    id:number;
    name:string
}

var obj_example_2:student = {id:1,name:"Deepika"};
var student_2:student = {id:1,name:"Deepika"};

// any is to say we will accept all values
var student_3:any = {id:1,name:"Deepika"};

function info(name: string,age: number):string{
    return "Your NAME is " + name + " and your age " + age + " year old";
}

var personal_info = info('deepika',26);
console.log(personal_info)

console.log(test);
console.log(val);