function howManySeconds(hours) {
	return hours * 3600;
}
function remainder(x, y) {
	return (x % y)
	
}
function convert(minutes) {
	return minutes*60
}
//power multiplication
function cubes(a) {
	return a ** 3
}
//larger funnction
function whichIsLarger(f, g) {
	return f()>g()?'f':g()>f()?'g':'neither'
}
//return first element in array
function getFirstValue(arr) {
	return arr[0]
}
//return true if the type and value are equal
function myFunction(a, b) {
    if(a===b)
    return true;
    else
    return false;
 }
  
  function alert_fn() {
    alert(document.innerHTML="this is protected the security");
  }
  function sampleFunction() {
    document.getElementById("sampleAnchor").innerHTML = "BitDegree Space Doggos";
    document.getElementById("sampleAnchor").href = "https://www.bitdegree.org/courses/learn-solidity-space-doggos/";
    document.getElementById("sampleAnchor").target = "_blank";
  }
  
  function times() {
    let date=new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    document.getElementById("date").innerHTML = date+day+month+year;
    document.getElementById("date").style.color="green";
    document.getElementById("date").style.textAlign="center";
  }
  function let_v() {
    let z = 11;
    {
      let z=10
    }
    document.getElementById("let-v").innerHTML = z;
  }
  function var_v () {
    var z = 11;
    {
      var z=10;
    }
    document.getElementById("var-v").innerHTML = z;
  }
  / loop /
function loop() {
  let text="";
  for (let i = 0; i < 10; i++) {
    if (i==6){break;}
    if (i===3){continue;}
    text += "The number is " + i + "<br>";
  };
  document.getElementById("for_loop").innerHTML=text;
}

function for_in() {
  let number=[10,20,30,40,50];
  txt="<ul>";
  for (let x in number){
    txt+="<li>"+ number[x]+"</li>";
  };
  txt += "</ul>";
  document.getElementById("in_loop").innerHTML=txt;
}
function Do_while () {
  let txt="";
  let i=0;
  do{
    txt += "<br>values"+" " + i;
    i++;
  }
  while(i < 9);
  document.getElementById("do_while").innerHTML=txt;
}

function maping() {
  let veg =new Map([
    ["brinjal",10],
    ["potato",35],
    ["tomato",100],
    ["spinach",30],
  ]);
  veg.set("lemon",5);
  veg.delete("tomato");
  text="<ul>"
  veg.forEach(function(value,key){
    text +="<li>"+ key +"="+ value+"</li>"  
  })
  text +="</ul>";
  let txt="";
  for(let x of veg.entries()){
    txt +=x + "<br>";
  }
  document.getElementById("maps").innerHTML=veg.get("brinjal") +"<br>"+ veg.get("lemon")+"<br>"+ veg.size+"<br>"+veg.has("tomato")+"<br>"+veg.has("lemon")+"<br>"+text+"<br>"+txt;
}

function sets() {
 const letters = new Set(["a","b","c","d","12"]);
 letters.add("e");
 / if the same values is retur its can't be count the values of them in set functions /
 letters.add("e");
 / for each in set /
 txt="";
 letters.forEach(function (values){
  txt += values+" <br>";
 })
 // values /
 text1="";
 for (const x of letters.values()){
  text1 += x +"<br>";
 }
 document.getElementById("set").innerHTML=letters.size +"<br>"+txt+" "+letters.values()+"<br>"+text1;
}
/ ternary operator /
function ternary_operator() {
  let age=18;
  let result=
  (age >= 18) ? "your eligble to access" : "your not eligble to access";
  document.getElementById("ternary").innerHTML=result;
}