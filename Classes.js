class user{
    constructor(username){
           this.username = username;
           this.score=0;
    }

    login(){
        console.log(`${this.username} is logged in`);
        return this;
    }
    
    countLoggedInStatus()
    {   
        console.log( this.score++);
        return this;
    }

    logout()
    {
        console.log(`${this.username} is logged out`);
        return this;
    }
}

class Admin extends user{
   deleteUser(user){
      users= users.filter((u)=>{
       console.log(u.username!== user.username);
           return this;
       })
   }
    
    
}


const userOne= new user('shaun');
const userTwo = new user('barry')
const admin = new Admin('anjulatatomar');

let users=[userOne,userTwo,admin];
console.log(users)
admin.deleteUser(userTwo);