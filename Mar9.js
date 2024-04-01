console.log("Hello World")

let a = 0;

    a > 0 ? 
        console.log("positive") :
        a == 0 ? console.log("zero") :
        console.log("negative");

    
str = "64567"
let answer = str[3];
console.log(answer); 

console.log(typeof(answer));



let n = "12345";
let sum = 0;

for(let t of n) {
    sum = sum + parseInt(t);
}
console.log(sum);



// ASCII Unicode, toUpperCase, toLowerCase, String Comparission.

//  A - Z = 65-90
//  a - z = 97-122
//  " "   = 32

// element.charCodeAt() = String to its number conversion
// string.fromCharCode() = number to its string conversion.

let ele = "HASD";

console.log(ele.charCodeAt(1))

let N = 69;

console.log(String.fromCharCode(N))


let one = "J"
let two = "I"
console.log(one>two);


let x = "j";
code = x.charCodeAt();

if(code >= 65 && code <= 90){
code = code + 32;
} else if(code >= 97 && code <= 122){
code = code - 32;
}

console.log(String.fromCharCode(code));



let z = "k";

if(z >= "A" && z<= "Z"){
    console.log(z.toLowerCase());
} 
else if (z >= "a" && z<= "z") {
    console.log(z.toUpperCase());
}


let y = "saiprasad"

console.log(y.indexOf("a", 2))


// Slice 

let string1 = "Saiprasad"

console.log(string1.slice(3, -1));


// Trim

let str2 = " Ra ju "

str2 = str2.trim();

console.log(str2.startsWith("R"))
console.log(str2.length);



let str3 = "    sai   is   coding  "

str3 = str3.trim();
str3 = str3 + " ";
let word = ""
for (let t of str3) {
    if(t!= " "){
        word = word + t;
    }
    else if (t == " " && word!= ""){
        console.log(word)
        word = ""
    }
}


// Split
// Join
// Reverse

let arr1 = ["R", "a", "j", "u"];

for(let t of arr1){
    console.log(t);
}

let str4 = "Rajesh"

let str4Arr = str4.split("");
console.log(str4Arr)

let str4Rev = str4Arr.reverse();
console.log(str4Rev);

console.log(str4Rev.join());


// Objects

let obj = {
    "name" : "sai",
    "age"  : 23,
    "city" : "Hyderabad",
    1 : 23,
    "work" : "Frontend",
    2 : 34
}

console.log(obj, typeof(obj));

for(let x in obj){
    console.log(x, typeof(x));
}


// Spread Operators

let obj1 = {
    a : 1,
    b : 2, 
    c : 3
}

let obj2 = {
    d : 4, 
    e : 5
}

// let obj3 = {}
// for(let y in obj1){
//     obj3[y] = obj1[y];
// }
// for (let y1 in obj2){
//     obj3[y1] = obj2[y1];
// }
// console.log(obj3);


let obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3);



// Splice

let arr2 = [10,20,30,40,50]

arr2.splice(3, 0, 35);

console.log(arr2);

for(let i= arr2.length-1; i >= 3; i-- ) {
    arr2[i+1] = arr2[i]
    console.log(arr2)
}

arr2[3] = 35;

console.log(arr2);


let arr = [90,13,32,45,67,84,88]

let big = arr[0];
let big2 = arr[1];

for(let t of arr){
    if(t > big){
        big2 = big;
        big = t;
    }
    else if(t > big2 && big!= t){
        big2 = t;
    }
}

console.log(big);
console.log(big2);








