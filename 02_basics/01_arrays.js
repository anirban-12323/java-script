const myArr=[1,2,3,4,5]
myArr.push(89)
//console.log(myArr);
const myArr2=new Array(1,2,3,4,5,6)
//myArr2.push(23)
//console.log(myArr2)
const newArr= myArr2.join()
//console.log(newArr)
const slicearr=myArr.slice(1,3)
console.log(slicearr);
console.log("A",myArr);


const splicearr=myArr.splice(1,3)
console.log(splicearr);
console.log("B",myArr);
