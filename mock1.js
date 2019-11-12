// 1. create the array that only contains the values of the object
let x= {
  a:1,
  b:2
};

let arr = [];
for (let k in x){
  arr.push(x[k])
}
console.log(arr)

//2. convert string to be the reverse string
x = "hi"
let y ="ih"

const reverString =(str)=>{
  // convert into the array with each character being the element
  return str.split("").reverse().join('')

}
console.log(reverString(x))
//////////////*////////////////////////
 //3

 const obj = {
   a:1,
   b:2,
   getA(){
     console.log(this.a);
     return this
   },
   getB(){
     console.log(this.b)
   }
 }
 // const obj = {
 //   a:1,
 //   b:2,
 //   getA(){
 //     console.log(this.a);
 //
 //     (function getB(){
 //       console.log(this.b)
 //     }).bind(obj)()
 //   }
 //
 // }

 // const obj = {
 //   a:1,
 //   b:2,
 //   getA(){
 //     console.log(this.a);
 //      getB =()=>{
 //       console.log(this);
 //     }
 //   }
 //
 // }
// obj.getA().getB() should print both console.logs
obj.getA().getB()

//4
// [1,2].print()    //1,2

Array.prototype.print= function(){
  return this.toString()

}

Array.prototype.print = function(){
  let str = '';
  for(let i=0;i<this.length;i++){
    if(i=== this.length-1){
      str+= this[i]
    } else {
      str+= `${this[i]},`;
    }
  }
  return str
}

console.log([1,2].print())

//5
// const a =function(x){
//   this.x = x;
// }
// const b =function(x,y){
//   this.y = y;
// }
// const newB = new b('x','y')
//
// newB.getX();  ?
// newB.getY();  ?

const a =function(x){
  this.x = x;
}
const b =function(x,y){
  // inherit all the properties and methods inside the parent constructor
  a.call(this,x);
  this.y = y;
}

a.prototype.getX=function(){
  console.log(this.x);
}
// inherit the prototype from parent constructor;
b.prototype = new a();
b.prototype.constructor=b;

b.prototype.getY = function(){
  console.log(this.y);
}
const newB = new b('x','y')


newB.getX();
newB.getY();

//6
const oj = {
  x:1,
  getX(){
    console.log(this);
    const inner= (function(){
      console.log(this.x)
    }).bind(oj)
    inner()
  }
}
oj.getX()

// 7
