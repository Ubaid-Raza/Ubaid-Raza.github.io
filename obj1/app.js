function question1 (){
    var my = [
         {name:"juice",price:50, quantity:3},
         {name:"cookie",price:30, quantity:9},
         {name:"shirt",price:880, quantity:1},
         {name:"pen",price:100, quantity:2}];
     var tp = 0;
     var tq = 0;    
    for (var i = 0; i < my.length; i++){
    console.log((my[i].name) + ' Total Price is ' + ((my[i].price) * (my[i].quantity)));
    tp = (tp +my[i].price);
    tq = (tq + my[i].quantity);
    }
    console.log("Total items Price :", tp);
    console.log('Total quantity : ',tq);
    };
    // question1(); uncomment question1 for console 
// -------------------------------------------------------------------------------------
function question2(){
var info = {
    firstname: 'ubaid',
    lastname : 'raza',
    email: 'ubaid31198@gmail.com',
    password: '000',
    age: 23,
    gender: 'male',
    city: 'Karachi',
    country: 'Pakistan'
}

var a = prompt('check property 1');
var b = prompt ('check property 2');

if (a in info && b in info) {
    console.log (a + ' or ' + b + ' found');
}
else {  
    console.log(a + ' or ' + b + ' not found');
}}
//question2();     //uncomment question2 for console
// -----------------------------------------------------------------------------------

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
    var obj3 = new Obj("adil",18,"karachi","pakistan")
    console.log(obj3)
    }
// question3();  //uncomment question3 for console
// -----------------------------------------------------------------------------------------------

// question4
// function Obj (fname,gender,address,education,profession){
//     this.name = fname;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// }



// arr = []

// function save (){
//     fname = document.getElementById("myname").value;
//     if (document.getElementById("male").checked) {
//         gender = document.getElementById("male").value;
//     }
//     else{
//         gender = document.getElementById("female").value;
//     }
//     address = document.getElementById("add").value;
//     education = document.getElementById("edu").value;
//     profession = document.getElementById("Pro").value;
//     var person = new Obj(fname,gender, address, education, profession)
//     arr.push(person);
//      console.log(arr)
// }
