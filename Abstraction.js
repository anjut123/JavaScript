function Circle(radius){
   // let color ='red' // this is local variable and not the property of Circle
    this.radius;
    let defaultLocation={ x:0,y:0}; 
    let compute=function(){    // declared local function
        console.log("compute")
    }
    this.draw=function(){
        compute() // problem with implementation, i do not want compute method to display to the user. Now we have fixed the problems using let 
        console.log("draw")
    }
}

const circle = new Circle(10)
// using private variables and methods , we can hide the implementation and show the essentials
