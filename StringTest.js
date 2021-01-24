let numbers =[3,4];

numbers.splice(0,0,5,6) // 0- index , 0 - number of items to be delete, 5& 6 are values to be inserted at 3 index
console.log(numbers)


let nums= [1,2,3,4,5,6,7]
console.log(nums.splice(6,0,8,9)) // nums.pop() - delete last index value  ,nums.shift() - deletes first index values
console.log(nums)
let another =nums;

nums.length=0;
console.log(nums)
console.log(another)