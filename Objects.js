//object style programming- Objects has few properties and functions
const circle={
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
   draw: function (){}, //console.log("draw")
   move: function(){ } //console.log("move")}
} // purpose of object is to group related variables


 circle.draw()

 for(let key in circle)
 console.log(key,circle[key] )

 // for of loop - cannot be used on objects as objects are not iterable using forOf Loop

for (const iterator of Object.keys(circle)) {
    console.log(iterator)
}
