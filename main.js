//Requirement Number 1:
var user = {};
user.name = "Mike";
user.surname = "Mike";
console.log(user.surname);
console.log(user.name);

user.name = "Peter";
console.log(user.name);
console.log(user);
delete user["name"];
console.log(user.surname);
console.log(user.name);
console.log(user);

//Requirement Number 2:
var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};
// write your code here..
fruit.getTotalFruitCount = function (){return this.apple+this.pear+this.peach;};
console.log(fruit.getTotalFruitCount());