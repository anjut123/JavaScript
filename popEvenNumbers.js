let numbers=[2,3,5,6,7,8,9,10]
let oddNumbers=[];
let evenNumber=[];

for(let i=0;i<numbers.length;i++)
{
    (!(numbers[i]%2==0))?oddNumbers.push(numbers[i]): evenNumber.push(numbers[i]);   
}

console.log(oddNumbers)
console.log(evenNumber)
