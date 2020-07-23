console.log("Promises");

let users = [
    {
        name: 'Berlin',
        email: "berlin@lu.com"
    },
    {
        name: 'Rio',
        email: "rio@lu.com"
    },
    {
        name: 'Tokyo',
        email: "tokyo@lu.com"
    },
]

console.log("Array of users: ", users);
console.log(users.length)
// simulating create user, get user, etc over server call
function getUsers(){
    // setTimeout(code, delay) to simulate server call with response delay
    // set timeout is a wrapper around a piece of code to execute it after a delay
    setTimeout(()=>{
        let result = '';
        users.forEach(user=>{
            result += `The user is ${user.name}.\n`
        });
        console.log(result);
    }, 1000);  // will print t1he result after a timeout of 3 seconds
}

function createUser(user, callback){
    setTimeout(()=>{
        users.push(user);
        callback();
    }, 3000);
}

createUser({name: 'Denver', email: 'denver@lu.com'}, getUsers);
getUsers();  // because of callback, first 3 users get printed, then 4 users get printed
