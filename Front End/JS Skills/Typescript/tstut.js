var Myname = "Aman";
var Myage = 50;
var Canvote = false;
var Anything = "blah!";
Anything = 60;
Anything = true;
var dog = {
    petname: "Smacky",
    numlegs: 4,
    hastail: false
};
var cat = {
    petname: "Laila",
    numlegs: 4,
    hastail: true
};
var dogname = dog.petname;
var strarr = ["A", "B", "C"];
var numarr = [1, 2, 3, 4, 5];
var boolarr = [true, false, true, false];
var anyarr = [1, "A", true, [false]];
var func = function () {
    return "Hello!";
};
var hello = func();
console.log(hello);
var animals = [
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
var numo = 5;
if (true) {
    var numo_1 = 10;
}
console.log(num);
var num = 5;
if (true) {
    var num = 10;
}
console.log(num);
var arr = [1, 2, 3, 4, 5];
for (var val in arr) {
    console.log(val);
}
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var numval = arr_1[_i];
    console.log(numval);
}
var power = function (base, pow) {
    var prod = 1;
    for (var i = 0; i < pow; i++) {
        prod *= base;
    }
    return prod;
};
var num1 = 2;
var num2 = 8;
console.log("2**8 = " + power(num1, num2));
var prod = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 5; }
    if (typeof num3 !== 'undefined') {
        if (num3) {
            return num1 * num2;
        }
    }
    return 55;
};
console.log(prod(2, 5, false));
var prodall = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a * b; }, 1);
    return sum;
};
var concatall = function () {
    var strs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strs[_i] = arguments[_i];
    }
    var concat = strs.reduce(function (a, b) { return a + b; }, "");
    return concat;
};
var great = " is grate.";
console.log(prodall(1, 2, 3, 4));
console.log(concatall("Aman ", "Kumar", great));
var addamillion = function (x) { return x - 1000000; };
console.log(addamillion(1));
