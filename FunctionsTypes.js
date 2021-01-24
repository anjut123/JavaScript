function createAddress(street,city,zipcode)
{
    return {
        street,
        city,
        zipcode
    }
}

let add= createAddress('1','2','3')
console.log(add)

function CreateAddress(street,city,zipcode)
{
    
        this.street =street,
        this.city = city,
        this.zipcode = zipcode
  
}

let create= new CreateAddress('a','b','c')
console.log(create)
