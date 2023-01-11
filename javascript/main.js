//async and await function
async function add(){ 
let promo = new Promise((resolve,reject)=>{
    setTimeout(() => {
      a=5+10;
      if(a==15){
          resolve("correct answer")
      }  
      else{
          reject("wrong answer")
      }
    }, 1000);
  });
 let result= await promo.then((value1)=>{
console.log(value1);
  })

  .catch((err) => {
      console.log(`you have an error`, err);
  })
}
add();