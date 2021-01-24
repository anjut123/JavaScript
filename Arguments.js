
 function sum(...args){
    return args.reduce((a,b)=>
        a+b)
    
}


console.log(sum(1,3,2,9))



function interest(principal,rate=3.5,years){
    return principal*rate/100*years
}

console.log(interest(10000,5))