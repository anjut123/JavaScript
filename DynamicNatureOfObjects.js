const circle = {
    radius:1
}

//we can add a new property 
circle.color='blue'
circle.draw=function()
{

}

// delete a property
delete circle.draw()
//we have defined const circle but here we can define a new property and delete a property what kind of const is it?
// so here const mean we cannot reassign circle object , circle ={}; // we will get error - assignment to constant variable