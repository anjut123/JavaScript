const circle={
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
   draw: function (){console.log("draw")}
}

// create another object of circle object
//const another ={};
//1  - old way of copying an object
//for(let key in circle)
// another[key]=circle[key]
/// console.log(another)

//2 Object.assign()
 //  const another = Object.assign({},circle)
   //console.log(another)
   
   //3 spread operator ...
   const another = {...circle};
   console.log(another)