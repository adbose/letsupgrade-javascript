class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0
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


let user1 = new User('Max', 25, 'max@lu.com');
user1.login().getDetails().logout();  // Chaining of functions

let user2 = new User('Min', 25, 'min@lu.com');


class Moderator extends User{
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

let mod = new Moderator('Berlin', 24, 'berlix@lu.com');
mod.deleteUser(user2);


class Admin extends Moderator{
    addCourse(user, course){
        user.courses.push(course);
        console.log(user);
    }
}

let admin = new Admin('Rio', 25, 'rio@lu.com');
admin.addCourse(user1, "JavaScript");