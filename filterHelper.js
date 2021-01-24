var products =[
    { name :'cucumber', type:'vegetable'},
    {name:'banana',type:'fruit'},
    {name:'apple',type:'fruit'},
    {name:'potato',type:'vegetable'}
]

var filteredProducts =[];

for(var i=0;i<products.length;i++)
{
    if(products[i].type==='vegetable')
    {
        filteredProducts.push(products[i]);
    }
    
}

console.log(filteredProducts)

var filterType= products.filter(function(product){

    return product.type==='vegetable';
});

console.log(filterType)