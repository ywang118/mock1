6.
const oj = {
  x:1,
  getX(){
    console.log(this);
    const inner= function(){
      console.log(this.x)
    }
    inner()
  }
}
oj.getX()   //undefind, how to make it work?


// use arrow function
const oj = {
  x:1,
  getX(){
    console.log(this);
    const inner=()=>{
      console.log(this.x)
    }
    inner()
  }
}
// use variable
const oj = {
  x:1,
  getX(){
    console.log(this);
    let that = this;
    const inner= function(){
      console.log(that.x)
    }
    inner()
  }
}

// bind
const oj = {
  x:1,
  getX(){
    console.log(this);
    const inner= function(){
      console.log(this.x)
    }
    inner.bind(this)()
  }
}
