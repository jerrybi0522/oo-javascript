// Cheatsheet

// Object Literal- contains functions, attributes, and methods
var object = {
	string: "Hello",
	integer: 1
}

console.log(object.string)
console.log(object.integer)

// Constructor- creating a function for an object
function constructor(string1, string2){
	this.string1 = string1;
	this.string2 = string2;
}

// Instance- creating a new object with function
var instance = new constructor("Hello", "Goodbye")
var another_instance = new constructor("Greetings", "Ciao")

// Reading Attributes
var read = {
	dot: "Yes",
	"is-square": true
}

// Square Notation
read["is-square"]

// Dot Notation
read.dot

// Storing and Using Methods
var use_method = {
	string: "He",
	stringception: function(){
		return string + " is a spy";
	}
}

use_method.stringception()

// Prototypes- allows you to modify object and instancs after they have been defined intially
function Initial(string, integer){
	this.string = string;
	this.integer = integer;
}

var some_var = new Initial("Bagels", 7);

Initial.prototype.favorite = function(){
	return "I like " + this.string;
}

some_var.favorite()

// Prototypical Objects- have an object start out with another as template
function Food(fruit, grains, protein){
	this.fruit = fruit;
	this.grains = grains;
	this.protein = protein;
	this.eat = function(){
		return "I ate " + this.fruit + ", " + this.grains + ", and " + this.protein;
	}
}

function Breakfast(beverage){
	this.beverage = arguments['3'];
	this.drink = function(){
		return "I drank " + this.beverage;
	}
	Food.apply(this, arguments);
}

Breakfast.prototype = new Food();

var classic = new Breakfast("apple", "toast", "bacon", "orange juice");

// Listing Properties
var item = {
	size: "small",
	shape: "square"
}

function list(obj){
	for (var attr in obj){
		console.log(attr + " = " + obj[attr]);
	}
}

list(item)

// Multiplier
var Multiplier = function(){
	this.currentValue = 1

	this.multiply = function(x){
		this.currentValue = x * this.currentValue;
		return this.currentValue
	}

	this.getCurrentValue = function(){
		console.log(this.currentValue);
	}
}

var multi = new Multiplier;
multi.multiply(3)
multi.multiply(6)
multi.getCurrentValue

// Photo Album
function Photo(name, location){
	this.name = name;
	this.location = location;
}

var Album = function(){
	this.photos = [],
	this.addPhoto = function(photo){
		this.photos.push(photo);
	}
}

var pic1 = new Photo(Mom, NYC);
var pic2 = new Photo(Sis, Paris);
var family = new Album();

family.addPhoto(pic1);
family.addPhoto(pic2);
family.photos;

// Teachers and Students
function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

function Teacher(subject){
	this.subject = arguments['3'];
	Person.apply(this, arguments);
}

Teacher.prototype = new Person();

function Student(grade){
	this.grade = arguments['3'];
	Person.apply(this, arguments);
}

Student.prototype = new Person();

var School = function(){
	this.teachers = [];
	this.students = [];
	this.addTeacher = function(teach){
		this.teachers.push(teach);
	}
	this.addStudent = function(kid){
		this.students.push(kid);
	}
}

var student1 = new Student("Jim", 12, "male", 6);
var student2 = new Student("Lola", 14, "female", 8);
var teacher1 = new Teacher("Emily", 28, "female", "math");
var teacher2 = new Teacher("Greg", 37, "male", "science");
var middle = new School();

middle.addStudent(student1);
middle.addStudent(student2);
middle.addTeacher(teacher1);
middle.addTeacher(teacher2);
middle.teachers;
middle.students;