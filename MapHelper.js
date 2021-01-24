var number=[1,2,3];
var doubleNumbers =[];

for(var i=0;i<number.length;i++)
{
    doubleNumbers.push(number[i] *2);
}

console.log(doubleNumbers);
doubleNumbers;

// using map helper

var doubled = number.map(function(numb){
    return numb *2;
})

console.log("doubled numbers" +doubled)

var cars=[
    {name:'BMW',price:'cheap'},
    {name:'ferari',price:'expensive'}
]

var prices =cars.map(function(car){
    return  car.price;
})

console.log(prices)
