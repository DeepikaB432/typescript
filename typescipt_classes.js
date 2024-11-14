var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.fullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var p = new Person('Deepika', 'Bansal');
var p2 = new Person('Caffy', 'Bansal');
var p3 = new Person('Sam', 'T');
var p4 = new Person('Test', 'User');
var full_name = p.fullname();
var full_name2 = p2.fullname();
var full_name3 = p3.fullname();
var full_name4 = p4.fullname();
console.log(full_name);
console.log(full_name2);
console.log(full_name3);
console.log(full_name4);
console.log(p);
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.age = age;
        return _this;
    }
    return Male;
}(Person));
var male = new Male('D', 'Bansal', 27);
console.log(male.fullname());
