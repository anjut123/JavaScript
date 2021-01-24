let users=[
    {name:'jill'},
    {name:'jack'},
    {name:'panther'}
]

function searchName(user,search)
     user.find(user =>{
    return user.name === search 
     
})


let name1 =searchName(users,'panther')
console.log(name1)