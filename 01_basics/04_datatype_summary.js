const id=Symbol('123')
const accountid=Symbol('123')
//console.log(id==accountid);
let myObj={
    name:"Anirban",
    age:20,
}
//console.log(myObj);
const myFunction=function(){
    console.log("hello");
}
//console.log(myFunction);
let myYoutubeName="Anirban guha roy"
let anothername= myYoutubeName
anothername="rohit sharma"
//console.log(anothername);
//console.log(myYoutubeName);
let userOne={
    email:"AnirbanGuharoy@gmail.com",
    upi:"anirban@ybl"
}
let userTwo=userOne
userTwo.upi="roy@ybl"
console.log(userTwo.upi);
console.log(userOne.upi);
