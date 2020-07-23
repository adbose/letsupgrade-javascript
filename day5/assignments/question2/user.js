class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in.`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out.`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name} and email is ${this.email}`);
        return this;
    }
}

// create user object
let user1 = new User('Max', 25, 'max@lu.com');
user1.login().getDetails().logout();  // Chaining of functions

let user2 = new User('Min', 25, 'min@lu.com');
user2.login().getDetails().logout();

let users = [user1, user2]
console.log("The number of users are: ", users.length)
console.log("The users are: ", users)


// inheriting classes
class Moderator extends User{
    rainCoins(user){
        user.luCoins += 100;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return this;  // inside a method, this refers to the object, which is mod
    }
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
            //all those users are returned whose email is not
            // equal to user.email
        })
        console.log(`${user.name} with ${user.luCoins} coins removed by ${this.name}`);
        return this;
    }
}

// Moderator
let mod = new Moderator('Berlin Mod', 24, 'berlin@lu.com');
console.log(mod);
mod.login().getDetails();

ret = mod.rainCoins(user1);  // add coins to user1
console.log(ret);  // ret is the same instance of mod of class Moderator, so we can access Methods of moderator
ret2 = ret.rainCoins(user1).rainCoins(user1);
console.log(ret2); // ret2 is the same object mod

ret3 = ret2.rainCoins(user2);  // return is the object mod
ret4 = ret3.rainCoins(user2);
console.log(ret4)  // prints mod

ret5 = mod.rainCoins(user2).deleteUser(user2);
console.log(ret5); // if deleteUser returns mothing, ret5 is undefined, else mod
console.log("The number of users are: ", users.length)
console.log(users);


// Admin
class Admin extends Moderator{
    addCourse(user, course){
        user.courses.push(course);
        console.log(`${this.name} added the course ${course} to ${user.name}'s account`);
        console.log(user);
    }
}

admin = new Admin("Rio", 22, "rio@lu.com");
console.log(admin);
ret6 = admin.login().getDetails();
console.log(ret6);
ret7 = ret6.addCourse(user1, "Python");
console.log(ret7);  // addCourse doesnt return anything so ret7 is undefined

admin.addCourse(user1, "JavaScript");

// JavaScript calls the base class constructor by default
// derived/inherited classes call the base class constructor using super
// but this is done automatically by javascript, so we don't even need
// to define constructor in derived class and call super inside it
