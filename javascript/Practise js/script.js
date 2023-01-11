//Data types
let a = 9;
let b = "Nine";
let c = true;
let d = ["guru",22];
let guru = {
    name:"Guru",
    age : 22,
    position : "intern"
}
//FUNCTIONS
function additions(par1,par2)
{
    console.log( par1 + par2);
}
additions (10,15);

function collapse(par1,par2){
    console.log(par1 / par2);
    return console.log(par1 * par2);
    console.log(par1 % par2);//THis line will not work hence the return statement is fulfilled
}
collapse(25,5);
//String Methods 

//length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log (text.length);

//slice
console.log(text.slice(-7));

//substring
let str = "Apple, Banana, Kiwi";
console.log(str.substring(7,13));

//substr
let strr = "Apple, Banana, Kiwi";
console.log(strr.substr(7,6));

//replace //case sensitive
let text2 = "i love Microsoft"
console.log(text2.replace("Microsoft","Amazon"));

//replace all //case sensitive
let text3 = "I love cats. Cats are very easy to love. Cats are very popular."
text3 = (text3.replaceAll("Cats","Dogs"));
text3 = (text3.replaceAll("cats","dogs"));
console.log(text3);

//toUppercase
text4="make it happen";
text5 = text4.toUpperCase()
console.log(text5)

//tolowercase
text6="MAKE IT HAPPEN";
text7 = text6.toLowerCase()
console.log(text7)

//concat //both concat and concadination are same 
let text10 = "Hello";
let text11 = "GURU";
let text12= text10.concat(" ",text11);
console.log(text12)

//string literals
let name = "kamal"
let lit = `hello ${name}
               Welcome To the World Of javascript
`;
console.log(lit);

//array Methods (toString)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// join()
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitss.join(" * "));
//pop
const arr1 = ["Banana", "Orange", "Apple", "Mango"];
arr1.pop()
console.log(arr1);

//push
const arr2 = ["bannana", "orange", "apple ",];
arr2.push(main = {
    naame:guru,
    age:22,
});
function myfunc(b , c)
{
  return b * c ;
}

arr2.push(myfunc())
a=56;
console.log(arr2);
arr2[3]["age"] = a;
console.log(arr2)
//SORT
fruits.sort()
console.log(fruits)
//descending order
fruits.sort();
fruits.reverse();
console.log(fruits)
//class
class student{
  constructor(pear,standard,age){
  this.pear= pear,
  this.standard=standard,
  this.age=age;

}
agee(){
    let date = new Date();
    return date.getFullYear() - this.age;
}
tys(x){

 return this.age - x;

}
}
let student1 = new student("guru",12,18)
let student2 =new student("balaji",11,17)
let student3=new student("lokesh",9,19)

console.log(student1);
console.log(student2);
console.log( student3.pear + " " + `Year Born :` + student3.agee());
console.log(student1.pear)
console.log(`years studied in this school :` + student3.tys(3))

//class inheritance
class subjects{
       constructor(maths,science,english,tamil,social){
           this.maths = maths;
           this.social = social;
           this.science = science;
           this.tamil = tamil;
           this.english = english;
       }

practical(){
    let x = (this.english + this.maths + this.science +this.social + this.tamil) /50 ;
    return x
}
}


class result extends subjects {
 constructor(maths,science,english,tamil,social,name){
    super(maths,science,english,tamil,social);
    this.name=name;

 }
  total(){
    return this.english + this.maths + this.science +this.social + this.tamil ;
      
  }


}

let mysubjects =new result(78,89,98,99,56,"guru");
console.log(`Total Mark :` + mysubjects.total())
console.log(`Practical mark :` + mysubjects.practical())

//callback
// function
function greet(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}

// callback function
function callMe() {
  console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);


// returns a promise

let countValue = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

// executes when promise is resolved successfully

countValue
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });


  //promises
  function addition(){
    return "ok"
}
let promise = addition();
Promise.then((result) => {
  console.log("good morning",result)

})
//async and await function
let promo = new promise((resolve,reject)=>{
  setTimeout(() => {
    5+10;
    resolve("you won");
    reject("you learned")

  }, 1000);
});

