// IF WE WANT TO CREATE 2 CIRCLE OBJECTS 
// If our objects have logics within the different way to create objects we use factory functions or constructor functions
// factory functions produces objects

// factory function 
function createCircle(radius)
{
   return{
    radius, // if parameter is same then write one value
    draw(){
        console.log("draw")
    }
} // purpose of object is to group related variables
}

const circle = createCircle(2);
console.log(circle)
 //circle.draw()

 // beauty of factory functions is that we have defined the logics at one place

 // now i can create 2nd object of create circle
 