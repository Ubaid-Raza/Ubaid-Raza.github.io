// var itemsArray = [
//     {name:'juice',price:50, quantity:3},
//     {name:'cookie',price:30, quantity:9},
//     {name:'shirt',price:880, quantity:1},
//     {name:'pen',price:100, quantity:2}
// ];
// var sum  = 0

// for (i = 0; i < itemsArray.length; i++) {
//  a = (itemsArray[i].name) + ' Total Price is ' + ((itemsArray[i].price) * (itemsArray[i].quantity));
//  console.log(a);
//  sum = sum + (itemsArray[i].price)
//  }
//  console.log('Total Price is ' + sum)
// -------------------------------------------------------------------------------------
// var info = {
//     name: 'ubaid',
//     email: 'abc@.com',
//     password: 'abc',
//     age: 23,
//     gender: 'male',
//     city: 'Karachi',
//     country: 'Pakistan'
// }

// var a = prompt('check property 1');
// var b = prompt ('check property 2');

// if (a in info && b in info) {
//     console.log (a + ' or ' + b + ' found');
// }
// else {
//     console.log(a + ' or ' + b + ' not found');
// }
// -----------------------------------------------------------------------------------
// function Info(name,age,gender){
//     this.myname = name;
//     this.myage = age;
//     this.mygender = gender;
// }

// var myinfo = new Info('ubaid',23,'male');
// var myinfo1 = new Info('adil', 22, 'male');
// var myinfo2 = new Info('farhana', 17, 'female');

// -----------------------------------------------------------------------------------------------
function Obj (name,gender,address,education,profession){
    this.myname = fname;
    this.mygender = gender;
    this.myaddress = address;
    this.myeducation = education;
    this.myprofession = profession;
}



arr = []

function save (){
    fname = document.getElementById("myname").value;
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    }
    else{
        gender = document.getElementById("female").value;
    }
    address = document.getElementById("add").value;
    education = document.getElementById("edu").value;
    profession = document.getElementById("Pro").value;
    var person = new Obj(fname,gender, address, education, profession)
    arr.push(person);
     console.log(arr)
}


