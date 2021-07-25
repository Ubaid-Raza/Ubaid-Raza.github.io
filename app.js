function question1 (){
var my = [
     {name:"juice",price:50, quantity:3},
     {name:"cookie",price:30, quantity:9},
     {name:"shirt",price:880, quantity:1},
     {name:"pen",price:100, quantity:2}];
 var tp = 0;
 var tq = 0;    
for (var i = 0; i < my.length; i++){
console.log("Each Items Total :", (my[i].price * my[i].quantity));
tp = (tp +my[i].price);
tq = (tq + my[i].quantity);
}
console.log("Total items Price :", tp);
console.log('Total quantity : ',tq);
};

function question2 (){
var obj = {
     firstName : "Ubaid",
     lastName : "raza",
     email : "ubaid31198@gmail.com",
     password : "abcd",
     age : 23,
     gender : "male",
     city : " karachi",
     country : "pakistan",

}
if (obj.age !==undefined ){
console.log("age is Exist :" , obj.age)
}else{console.log("age is not exist")}
if(obj.country !== undefined){
     console.log("country is exist :" , obj.country)
}else{console.log("country is not exist")}
if(obj.firstName !== undefined){
     console.log("firstName is exist :" , obj.firstName)
}else{console.log("firstName is not exist")}
if(obj.lastName !== undefined){
     console.log("lastName is exist :" , obj.lastName)
}else{console.log("lastName is not exist")}

}
function question3 (){
function Obj (name,age,city,country){
     this.name = name,
     this.age = age,
     this.city = city,
     this.country = country;
}
 
var obj1 = new Obj("ubaid",23,"karachi","pakistan");
console.log(obj1);

var obj2 = new Obj("faizan",23,"karachi","pakistan")
console.log(obj2)
}

