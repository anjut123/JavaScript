function Circle(radius){
     this.radius;
     let defaultLocation={ x:0,y:0}; // what if i want to access it from outside, we can use getters and setters
     this.draw=function(){
         compute() // problem with implementation, i do not want compute method to display to the user. Now we have fixed the problems using let 
         console.log("draw")
     };
     Object.defineProperty(this,'defaultLocation', {
     get:function(){
         return defaultLocation;
     },
      set: function(value)
{
     defaultLocation=value
}

     }) // we have this method to define multiple properties

    



 }
 
 const circle = new Circle(10)
 // using private variables and methods , we can hide the implementation and show the essentials
 circle.draw()
 