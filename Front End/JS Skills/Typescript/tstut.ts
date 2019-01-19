var Myname: string = "Aman";
var Myage: number = 50;
var Canvote: boolean = false;
var Anything: any = "blah!";
Anything = 60;
Anything = true;

interface Animal {
	petname: string,
	numlegs: number,
	hastail: boolean
}

var dog: Animal = {
	petname: "Smacky",
	numlegs: 4,
	hastail: false
}

var cat: Animal = {
	petname: "Laila",
	numlegs: 4,
	hastail: true
}

var dogname = dog.petname;

var strarr: string[] = ["A","B","C"];
var numarr: number[] = [1,2,3,4,5];
var boolarr: boolean[] = [true,false,true,false];
var anyarr: any[] = [1,"A",true,[false]];

var func = () => {
	return "Hello!";
}
var hello = func();
console.log(hello);

var animals: Animal[] = [
	{
		petname: "Cat",
		numlegs: 4,
		hastail: false
	},
	{
		petname: "Dog",
		numlegs: 5,
		hastail: true
	}
];

var catname = animals[0].petname;
console.log(catname);

animals.push({
	petname: "Bird",
	numlegs: 2,
	hastail: false
});

let numo = 5;

if(true){
	let numo = 10;
}
console.log(num);
var num = 5;

if(true){
	var num = 10;
}
console.log(num);

var arr = [1,2,3,4,5];
for (var val in arr) {
	console.log(val);
}
for (var numval of arr) {
	console.log(numval);
}

var power = function(base: number, pow: number): number {
	var prod: number = 1;
	for (var i = 0; i < pow; i++) {
		prod *= base;
	}
	return prod;
}

var num1: number = 2;
var num2: number = 8;

console.log("2**8 = "+power(num1,num2));

var prod = function(num1: number, num2=5, num3?: boolean): number {
	if (typeof num3 !== 'undefined') {
		if (num3) {
			return num1 * num2;
		}
	}
	return 55;
}

console.log(prod(2,5,false));

var prodall = function(...nums: number[]): number {
	var sum = nums.reduce((a,b) => a * b,1);
	return sum;
}
var concatall = function(...strs: string[]): string {
	var concat = strs.reduce((a,b) => a + b,"");
	return concat;
}

var great: string = " is grate.";

console.log(prodall(1,2,3,4));
console.log(concatall("Aman ","Kumar",great));

var addamillion = (x) => x-1000000;
console.log(addamillion(1));
