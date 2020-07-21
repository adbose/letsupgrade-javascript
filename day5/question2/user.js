class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    login() {
        console.log(`${this.name} has logged in.`);
    }
    logout() {
        console.log(`${this.name} has logged out.`);
    }
    addCoins(){
        this.coins
    }
}
