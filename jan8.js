let arr = [20, "sai",30,40]

console.log(arr);

arr.pop();

console.log(arr[1]);

arr.push(40);

arr.splice(1,0,10);

console.log(arr);

// Prompt

// let x = prompt();
// console.log(x);


let myname = "sai"; 
let role = "sde";
let str = ` i am ${myname}, i am ${role} at accio`

console.log(str);

// Object Iteration and Higher order functions
// There are 4 Array Methods :
// 1. ForEach
// 2. Map
// 3. Filter
// 4. Reduce


// For in and For of loop is used to Iterate over the objects.

let arr1 = [1,2,3,4,5];

// 1. for in (Used to iterate over Indices)
for(let ind in arr1){
    console.log(arr1[ind])
  }
  
  let user = {
      names : "sai",
      role : "SDE" 
  }
  
  for(let Y in user) {
  console.log(user[Y]);
  }
  

// 2. for of (Used to iterate over Objects)
 for(let num of arr1){
  if(num%2==0){
    console.log(num)
  }
}

let nums = [1,2,1,3,2,3,4,7,9];

let freq = {}

for (let x of nums){
    if(freq[x]){
        freq[x]++
    }
    else{
        freq[x] = 1;
    }
}
console.log(freq);

// Function

function sumofnum (f,g){
    return f+g;
}
console.log(sumofnum(10,20));

// Arrow Function

let sum = (a,b) => a+b;
console.log(sum(5,7+7));


// 1. FOR EACH

// (It Itrates over the Elements, Index and List all at a time.)

let numss = [1,2,3,4,5]
//           0 1 2 3 4

let a = function (elements,index,list){
console.log(elements,index,list);
}
numss.forEach(a);

// Elements , Index and List are 'Parameters'.

// Iterating Only Element Here.
let summm = 0;
let f = function(e) {
    summm = summm + e;
}
numss.forEach(f);
console.log(summm);

// Problem: Add only Even Indices Using forEach Method

let sumOfInd = 0;
let p = function(ele,ind) {
    if(ind % 2 == 0){
         sumOfInd = sumOfInd + ele; 
    }
}
numss.forEach(p);
console.log(sumOfInd);  

// Anser : 9. So Even Indices in numss is 0=1, 2=3, 4=5 , Total = 1+3+5 => 9.


// 2. MAPS
// It is Similar to the ForEach but Map return seperate Source Array Length.

let array = [1,2,3,4,5]

let add = 0;
let x = function(p,q,r){
    // console.log(p,q,r)
}

// ForEach returns nothing.
let ans2 = array.forEach(x);
// Map Returns Source Array Length atleast.
let ans1 = array.map(x);

console.log(ans1);
console.log(ans2);








// function forEACH(a,b,c){
//     console.log(a+b);
//   }
//   let x =5;
//   let y = 6;
//   let z = 7;
//   forEACH(x,y,z);
  
  // list of items
  // 1. apple
  // 2. banana
  // 3. mango







// let items = [{
//   name:"Men Solid Cotton Blend Straight Kurta",price:"450"
// },{
//   name:"Men Solid Cotton Blend Straight Kurta",price:"₹349"
// }]

// function getItems(ele){
//   console.log(ele.name,ele.price)
// }

// items.map(getItems)

// 3. filter

// let arr = [1,2,3,4,5]
// function getEvenNumbers(ele){
//   if(ele%2==0){
//     return ele;
//   }
// }
// console.log(arr.filter(getEvenNumbers))


// 4 . reduce

// let arr = [1,2,3,4,5]

// intital = 0;
// cureent = 1;
// sum = 1 + 2 ;

// function getSum(preValue,CurrentValue){
//   let mult = preValue * CurrentValue;
//   return mult;
// }
// console.log(arr.reduce((getSum),1))


// let arr = [1,2,3,4,5]
// arr.map((li,ind,ele)=>{console.log(li,ind,ele)})

// function hello(){
//   console.log("hello");
// }
// hello();

// const greet = function(){
//   console.log("hello");
// }
// console.log(greet)

// const greet =()=>"hello";


// console.log(greet())

// let arr = [1,2,3,4,5]
// arr.map((ele)=>{console.log(ele%2==0)})

// const greet =(name)=>console.log(Hello ${name})




// let arr = [1,2,3,4,5]
// function elements(ele,ind,li){
//   if(ele%2==0){
//     return ele
//   }
  
// }
// console.log(arr.map(elements))



// 1. arrays - indices
// 2. objects - keys and value
// let arr = [];
// console.log(typeof arr) 
// let details = {
//   firstname: "dhruv",
//   lastName : "Patel"
// };

// console.log(details.lastName)

// for(let keys in details){
//   console.log(details[keys])
// }



// console.log(typeof details)













// 1. element , indice, whole Array
// let arr = [1,2,3,4,5]

// function elements(a,b,c){
//   return a;
// }


// console.log(arr.forEach(elements))

















