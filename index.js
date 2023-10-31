//  Objects
{
  let a = {
    name: "Hello",
    date: "Hello",
    ooo: "Hello",
    cdcdcd: "Hello",
    xaddscjn: "Hello",
    dcsdcdc: "Hello",
    ndcsdd: "Hello",
    cdscsdcd: "Hello",
    cdacsdc: "Hello",
  };
  console.log(a);
}

// Operaters Pactice
let a = 11;
let b = 9;
console.log(a + b);

// assignment operators
let assignment = 10;
assignment += 5;
console.log(assignment);

// comparison operator
let comp1 = 8;
let comp2 = 10;
console.log("comp1 == comp2 is ", comp1 == comp2);

// logical operaters
let x = 5;
let y = 6;
console.log(x < y && x == 5);
// console.log(x>y || x = 5);

// Used for html
let carName = "Check Your Age";
document.getElementById("age").innerHTML = carName;

// Conditional Expressions

// if else conditon statement
// let c = prompt("Are you a robot");
// if (c > "") {
//   alert("You Are eligible to Enter in this site");
// }
// else{
//     alert("Sorry You Are Not Eligible To Enter");
// }
// if else else if
// let c = prompt("Are you a robot");
// if (c ===  'no') {
//   alert("You Are eligible to Enter in this site");
// }
// else if( c == 'yes'){
//     alert("Please Give Correct Answer")
// }
// else{
//     alert("Sorry You Are Not Eligible To Enter");
// }

function checkAge() {
  // let age = prompt("What is your age?");
  // console.log("asd", age);
  // if (age >= 0 && age <= 10) {
  //     alert("Sorry you are kid go and watch pogo");
  // } else if (age > 11 && age <= 17) {
  //     alert("Caution! You are in teenage you will be actracted by Fake Beauties");
  // } else if (age > 17 && age <= 25) {
  //     alert("You are Adult Now you should get married in this age");
  // } else if (age > 25 && age <= 35) {
  //     alert("You Are Still Young you should enjoy your life");
  // } else if (age > 35) {
  //     alert("You Are Getting Old Now take rest and remember Allah");
  // } else {
  //     alert("You are restricted");
  // }
  let age = prompt("What is your age?");
  if (age >= 0 && age <= 10) {
    alert("Sorry you are kid go and watch pogo");
  } else if (age > 11 && age <= 17) {
    alert("Caution! You are in teenage you will be actracted by Fake Beauties");
  } else if (age > 17 && age <= 25) {
    alert("You are Adult Now you should get married in this age");
  } else if (age > 25 && age <= 35) {
    alert("You Are Still Young you should enjoy your life");
  } else if (age > 35) {
    alert("You Are Getting Old Now take rest and remember Allah");
  } else {
    alert("You are restricted");
  }
}

const name = 25;
let age = 25;
if ((name == 25) == age >= 23) {
  console.log("if");
} else {
  console.log("else");
}

function yfunction() {
  let text;
  let galaxy = document.getElementById("galaxyinput").value.toLowerCase();
  switch (galaxy) {
    case "earth": {
      text = "Earth is so beautiful and livable";
      break;
    }
    case "moon": {
      text = "Moon is So Dark";
      break;
    }
    default:
      text = "We are sorry";
  }
  document.getElementById("result").innerHTML = text;
}

// turnory oprater
let nim = 11;
let see = nim > 10 ? "you can drive" : "you cannot drive";
console.log(see);

// (loops) for loops
// for(let i = 0; i<10; i++){
//     console.log(i)
// }

function loop() {
  for (let i = 0; i < 10; i++) {
    let regret = "I am sorry";
    document.getElementById("SorryText").innerHTML += regret;
  }
}

// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for(let i = 0; i < n; i++){
//     sum += (i+1)
// }
// console.log("sum of first"+n+"natural number is"+sum)

// if you want to see details of string or number or any other datatype then you can write this syntax
let s = new String();
console.log(s);
// if you want to see details of string or number or any other datatype then you can write above mentioned syntax

// For in loops Object to be iterable for “for in loop”.
let obj = {
  Usman: 90,
  Rehman: 95,
  Ashfaq: 82,
  Imran: 99,
  Bilal: 99,
};

for (let key in obj) {
      console.log(key +" "+ obj[key]);
}
// For in loops

// while loop
function whileLoop() {
  let n = prompt("Enter the value of n");
  n = Number.parseInt(n);
  let c = 0;
  while (c < n) {
    console.log(c);
    c++;
  }
}

// let n=prompt("Entr the value of n")
// n=(n)
// let c=0;
// while(c<n){
//   c++;
// console.log(c)
// }
// while loop

// Do While Loop
function doWhile(){
let n = prompt("Enter any number");
n = Number(n);
let i = 0;
// i++;
do {
  console.log(i);
  
} 
// false statemnet
while (i > n);
document.getElementById("demo").innerText = i
}
// Do While Loop 



// const names = ["Imran"];
// const  abc= "abc";
// const bol = false
// const moize={name:"moiz"}
// let result =  Array.isArray(abc);
// console.log(result)


// var arr = ([1, 2, 3, 4, 5, 6, 7]).reduceRight(function(previous, current) {
//   previous.push(current);
//   return previous;
// }, []);

// console.log(arr);

  // greet()
  // function greet(){
  //   console.log("Good Morning")
  // }

  // let greet;


   function prop(){
    var a = 10
  }
  console.log(a)
   prop()
   if (true){
    var Vari = "Hello"
   }
   console.log(Vari)