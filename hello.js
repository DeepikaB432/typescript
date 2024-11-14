// String Example
var test = 'test value';
//Number Example
var val = 10;
test = 'hello there';
val = 100;
var is_true = true;
//Array only containing String
var user = ["Andy", "Sam", "george", "Harsh"];
//to allow string and number values
var str_num_arr = [1, 'Array example', true];
// in case you are not sure about type
var array_example = [1, 'Testing', true];
var str_num_arr_2 = ['Array Example', 1];
var obj_example = { id: 1, name: 'Deepika' };
var student = { id: 1, name: 'Deepika' };
var obj_example_2 = { id: 1, name: "Deepika" };
var student_2 = { id: 1, name: "Deepika" };
// any is to say we will accept all values
var student_3 = { id: 1, name: "Deepika" };
function info(name, age) {
    return "Your NAME is " + name + " and your age " + age + " year old";
}
var personal_info = info('deepika', 26);
console.log(personal_info);
console.log(test);
console.log(val);
