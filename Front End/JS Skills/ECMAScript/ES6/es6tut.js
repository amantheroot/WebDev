function write(string,breakit=true) {
	if(breakit){
		document.write(string+"<br>");
	}else{
		document.write(string);
	}
}

var x = 5;

if (true) {
	var x = 10;
}
function redefine(){
	var x = 100;
}
redefine();
write("x = "+x);

let y = 5;

if (true) {
	let y = 10;
}
function redefineag(){
	let y = 100;
}
redefineag();
write("y = "+y);

var z = 100;
if (true) {
	let z = 1000;
}
write("z = "+z);

const E = 2.337;
//E = 4; //(error)
if (true) {
	const E = 4;
}
write("E = "+E);

write(typeof "string");
write(typeof 42);
write(typeof true);
write(typeof write);
write(typeof {x:1});
write(typeof new Date());
write(typeof [1,2,"hello!"]);
write(typeof null);
write(typeof undefined);
write(typeof Symbol());

write("Aman "+"Kumar");
let fname = "Aman";
let lname = "Kumar";

write(`${fname} ${lname}`);

write(`${5 + 25*60}`);
write(`5 + 25*60 = ${5 + 25*60}`);

write(`Math.random() = ${Math.random()}`);

function domath(string,...values) {
	string = string[0];
	switch(string){
		case 'Add':
			let sum = 0;
			for (let i=0;i<values.length;i++){
				sum+=values[i];
				if (i == values.length-1){
					write(`${values[i]} = `,false);
				}else{
					write(`${values[i]} + `,false);
				}
			}
			write(sum);
			break;
		case 'Sub':
			let diff = values[0];
			write(`${values[0]} - `,false);
			for (let i=1;i<values.length;i++){
				diff-=values[i];
				if (i == values.length-1){
					write(`${values[i]} = `,false);
				}else{
					write(`${values[i]} - `,false);
				}
			}
			write(diff);
			break;
		case 'Prod':
			let prod = 1;
			for (let i=0;i<values.length;i++){
				prod*=values[i];
				if (i == values.length-1){
					write(`${values[i]} = `,false);
				}else{
					write(`${values[i]} * `,false);
				}
			}
			write(prod);
			break;
		case 'Div':
			let quo = values[0];
			write(`${values[0]} / `,false);
			for (let i=1;i<values.length;i++){
				quo/=values[i];
				if (i == values.length-1){
					write(`${values[i]} = `,false);
				}else{
					write(`${values[i]} / `,false);
				}
			}
			write(quo);
			break;
	}
}

domath `Add${45}${45}${45}`;
domath `Sub${45}${45}${45}`;
domath `Prod${45}${45}${45}`;
domath `Div${45}${45}${45}`;

for(let char of fname){
	write(char);
}
write("");
for(let char of lname){
	write(char);
}

write("Hi There! ".repeat(5));

write(fname.startsWith("Am"));
write(fname.endsWith("aNa"));
write(fname.includes("man"));

let multia = "M\
U\
L\
T\
I";

let multib = `A 
Multi 
Line 
String`;

write(multia);
write(multib);

function power(num1=1,num2=1){
	let prod = 1;
	for(let i=0;i<num2;i++){
		prod*=num1;
	}
	write(`${num1}^${num2} = ${prod}`);
	write(`Arguments: ${arguments[0]} ${arguments[1]}`);
}

power();
power(2);
power(3,4);

function sumall(...vals){
	let sum = 0;
	for(i in vals){
		sum+=vals[i];
	}
	write(`The Sum is ${sum}`);
}

sumall(1,2,3,4,5,15);

let numarr = [1,2,3,4,5,6,7,8,10];
sumall(...numarr);

const addthem = (n1,n2) => domath `Add${n1}${n2}`;
write(addthem(4,8));

const factorial = (num) => {
	let fact = 1;
	for(let i=1;i<=num;i++){
		fact*=i;
	}
	write(`${num} factorial = ${fact}`);
};
factorial(6);

let checkprime = (num) => {
	let factors = [];
	for (let i=1;i<=num;i++) {
		if (num%i == 0) {
			factors.push(i);
		}
	}
	if (factors.length == 2) {
		return true;
	}else {
		return false;
	}
};

let numarrsumall = numarr.reduce((a,b) => a+b);
write(`sum is ${numarrsumall}`);

let numarrprimes = numarr.filter(checkprime);
write(`Primes ${numarrprimes}`);

let numarrrand = numarr.map(v => Math.floor(v * Math.random()));
write(`random numbers ${numarrrand}`);

function createCar(company,model,color,seates){
	return {
		company: company,
		model: model,
		color: color,
		seates: seates,
		specs: function() {
			return `${this.model} by ${this.company} colored ${this.color}
			 and having ${this.seates} is sooo liiiiiiit!!!`;
		},
		info: [company,model,color,seates],
		at: {
			price: seates * 100000,
			hood: 'convertible'
		}
	};
}

var car1 = createCar('Ford','sX','blue','4');
write(car1.info);
write(`${car1.model} is amazingly ${car1.at.price}`);
write(`The Properties are ${Object.getOwnPropertyNames(car1).join(" ")}`);

let {model, company} = car1;
write(`${model} is made by ${company}`);

let {at} = car1;
write(`${at.price} is very pricey`);

let randarr = [4,8,10,45,42];

let [,,third,,fifth] = randarr;
write(`${third} is third and ${fifth} is fifth`);

let [,,..._3to5] = randarr;
write(`third to fifth is ${_3to5}`);

let letit1 = 6, letit2 = 8;
[letit1, letit2] = [letit2, letit1];
write(`first: ${letit1} second: ${letit2}`);

class plane{
	constructor(type,size,color){
		this._type = type;
		this._size = size;
		this._color = color;
	}

	get type() {
		return this._type;
	}
	get size() {
		return this._size;
	}
	get color() {
		return this._color;
	}

	set type(type) {
		this._type = type;
	}
	set size(size) {
		this._size = size;
	}
	set color(color) {
		this._color = color;
	}

	static makePlane(type,size,color){
		return new plane(type,size,color);
	}

	getInfo(){
		return `This is a ${this._size} meters ${this._color} ${this._type} plane.`;
	}
}

let plane1 = new plane("commercial",50,"white");
write(`${plane1.getInfo()}`);

plane1.size = 100;
write(`${plane1.getInfo()}`);

let plane2 = plane.makePlane("fighter",30,"green");
write(`${plane2.getInfo()}`);

class fighterplane  extends plane{
	constructor(type,size,color,armed,numweapons){
		super(type,size,color);
		this._armed = armed;
		this._numweapons = numweapons;
	}
	get armed() {
		return this._armed;
	}
	get numweapons() {
		return this._numweapons;
	}
	set armed(armed) {
		this._armed = armed;
	}
	set numweapons(numweapons) {
		this._numweapons = numweapons;
	}

	getInfo(){
		return `This is a ${this._size} meters ${this._color} ${this._type} plane which is ${this._armed}ly armed with ${this._numweapons} weapons.`;
	}
}

let fplane1 = new fighterplane("fighter",60,"black",true,8);
write(fplane1.getInfo());

function getClassName(index){
	if (index == 1){
		return plane;
	}else {
		return fighterplane;
	}
}

class commercialplane extends getClassName(2){
	constructor(type,size,color,armed,numweapons){
		super(type,size,color,armed,numweapons);
	}
}

let commplane1 = new commercialplane('commercial',100,"white",false,0);
write(commplane1.getInfo());

let sym1 = Symbol("A Property");
let anobject_1 = {};
anobject_1[sym1] = "Value!";

write(`value of the property: ${anobject_1[sym1]}`);
write(`${sym1.toString()}`);

let anobject_2  = {};
anobject_2[sym1] = "Another Value!"

write(`value of another property: ${anobject_2[sym1]}`);

let aprop = Symbol.for("aprop");
let person1 = {},  person2  = {};

person1[aprop] = "somtng", person2[aprop] = "somaothertng";
write(`Person 1 has ${person1[aprop]} and Person 2 has ${person2[aprop]}.`);

let array1 = Array.of(4,535,232,5);
let array2 = Array.from("HELLO!");
let array3 = Array.from(array1,(val)=>Math.floor(Math.random()*val));

for (let val of array1) write(`A1 val: ${val}`);
for (let val of array2) write(`A2 val: ${val}`);
for (let val of array3) write(`A3 val: ${val}`);

let aset = new Set();
aset.add(5);
aset.add(5);
aset.add(98);
aset.add("iam");
aset.add({a:90});

write(`Has 98: ${aset.has(98)}`);
write(`Has \"lol\": ${aset.has("lol")}`);
write(`Set Size: ${aset.size}`);

aset.delete("iam");
for(let val of aset) write(`Set Val: ${val}`);

var amap = new Map();
amap.set("KeyA","COME ON!");
amap.set(55,42);
amap.set(false,["satan",666]);

write(`KEYB : ${amap.get(55)}`);
write(`What? : ${amap.get(false)}`);

write(`Size: ${amap.size}`);

amap.forEach(function(key,value){
	write(`${key} : ${value}`);
});

let prom1 = Promise.resolve("WE HAVE A DEAL!");
prom1.then((res)=>{write(res)},()=>{});

let prom2 = Promise.reject("WE DO NOT HAVE A DEAL!");
prom2.then(()=>{},(res)=>{write(res)});

let dealbreaker = 1000;
let prom3 = new Promise(function(resolve,reject){
	if (dealbreaker<=1000){
		resolve("BROKEN!");
	}else{
		reject("FIXED!");
	}
});
prom3.then((res)=>{write(res)},(err)=>{write(err)});

let prom4 = new Promise(function(resolve,reject){
	setTimeout(()=>{resolve("3 Seconds!")},3000);
});
prom4.then((res)=>{console.log(res)});

let randval = Math.floor(Math.random()*100);
let prom5 = new Promise((resolve,reject) => {
	if (randval <= 90) {
		throw new Error("Sorry mate!");
	}else {
		resolve("YA BOOI!");
	}
});
prom5.then((res)=>{write(res)});
prom5.catch((err)=>{write(err)});
prom5.catch((err)=>{write(err.message)});
