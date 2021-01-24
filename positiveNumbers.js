let cars =[
    {model:'buick',price:'CHEAP'},
    {model:'mercedez',price:'expensive'}
]

let prices= cars.map((car)=>{
    return car.price;
})

console.log(prices)