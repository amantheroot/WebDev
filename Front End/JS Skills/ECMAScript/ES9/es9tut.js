const write = (string) => {
	document.write(`${string}<br>`);
}


let obj = {
	a:1,
	b:2,
	c:3,
	d:4,
	e:5,
	f: {
		is: "retard"
	}
};
let {a,c,...rest} = obj;
write(`a: ${a}`);
write(`c: ${c}`);
write(`rest: ${JSON.stringify(rest)}`);


var randval = Math.floor(Math.random()*100);
let prom = new Promise((resolve,reject) => {
	if(randval <= 50){
		resolve("Done!");
	}else{
		throw new Error("Try Again!");
	}
});

prom.then((res)=>{write(res)});
prom.catch((err)=>{write(err.message)});
prom.finally(()=>{write("Go learn ES.Next")});
