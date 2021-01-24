// Constructor Functions - naming conventions - pascal notation
// instead of returning object ,we use different approach to initalise the object
//In JS , we have a keyword called this and this is a reference to the object that is executing the piece of code 
// here we are adding a new property (radius) for an empty object

function CreateCircle(radius)
{
  this.radius=radius;
  this.draw=function(){
      console.log("draw")
  }
}

const circle=new CreateCircle();

console.log(circle)

// new operator creates {} empty object in background const x={};
// it will set this. radius and draw property in this new object that is circle
// finally this new keyword will return circle object with this function (i.e. radius and draw)
// we do not need to write return keyword as return this;

// difference ff and cf
//1 - create object in fC: we simply call a function and return the object and in CF instead of returning an object we use  this keyword
