// For each Helper

var colors =['red','blue','yellow'];   // it is an array
for(i=0;i<colors.length;i++)   // classic for loop
{
    console.log(colors[i]);
}

colors.forEach(function(color){  // Array methods have for each () method  
    // function is an anonymous function.It is called one time for every item
    // first element is passed to Iterator function and then iterator function return first element and then so on  
    // less code , we do not need to write logic here as compare to classic for loop
   console.log(color);
});

// Example 2 : to print sum of array
let num = [1,2,3,4,5,6,7,8,9,10];
// using c forEach loop
let sum =0;

num.forEach(function(num){
    sum +=num;
})

console.log("sum of numbers" +sum);

// example 3 : above example can written by writing separte iterator function

let addNum=0;
function adder(number)
{
   addNum+=number;
}

num.forEach(adder);
