const write = (string) => {
	document.write(`${string}<br>`);
};


let str = "nutz!";

write(str.padStart(10));
write(str.padEnd(10));
write(str.padStart(10,"deez"));
write(str.padEnd(10,"deez"));
write(str.padStart(15,"come").padEnd(25,"come"));
write(str.padEnd(10,100));

let sidespace = 10;
write(str.padStart(sidespace+str.length,'_').padEnd(str.length+(2*sidespace),'_'));


let anobject = {
	name: "Aman",
	age: 85,
	friends: ["K","KKK","9K"],
	body: {
		weight: 90,
		height: 175
	}
};
write(Object.values(anobject));
write(Object.values(anobject.body));

let anarray = [1,2,3,"4",5,9];
write(Object.values(anarray));

let anotherobject = {
	90: "what?",
	105: "hello!",
	4: "noway!",
	"kin": "lol",
	"1": "yeah!"
}
write(Object.values(anotherobject));

write(Object.values('We Will Rock You'));


write(Object.entries(anobject));
write(Object.entries(anobject.body));

write(Object.entries(anarray));

write(Object.entries(anotherobject));

write(Object.entries('We Will Rock You'));


write(JSON.stringify(Object.getOwnPropertyDescriptors(anobject))+"<br>");
write(JSON.stringify(Object.getOwnPropertyDescriptors(anobject).name));


function afunc(a,b,c,) {
	return a+b+c;
}
write(afunc(1,2,3,));


let prom = (randval) => {
	return new Promise((resolve,reject) => {
		setTimeout(()=>{
			if (randval <= 90) {
				resolve("Alright it is done!");
			}else {
				reject("Nope Try Again!");
			}
		},3000);
	});
}

async function waitfunc(){
	const message = await prom(Math.floor(Math.random()*100));
	console.log(`${message}`);
}

console.log("first");
waitfunc();
console.log("second");
