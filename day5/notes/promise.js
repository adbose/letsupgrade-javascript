console.log("Promises");

// 

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

function getUsers(){
    // setTimeout(code, delay) to simulate server call with response delay
    // set timeout is a wrapper around a piece of code to execute it after a delay
    setTimeout(()=>{
        let result = '';
        users.forEach(user=>{
            result += `The user is ${user.name}.\n`
        });
        console.log(result);
    }, 1000);  // will print t1he result after a timeout of 1 seconds
}

function createUser(user){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            users.push(user);

            const error = false;  // you can simulate reject
            // when you put error to true
            if (!error){
                resolve();
            }
            else{
                reject("Oops an error occured");
            }
        }, 3000);
    })
}

createUser({name: 'Denver', email: 'denver@lu.com'})
.then(getUsers)
.catch(error=>console.log(error));


// example two
// usertData is a promise 
const userData = new Promise((resolve, reject)=>{
    const error = false;
    if (error){
        reject("An error occured");
    } else{
        resolve({
            name: 'Max',
            email: 'max@lu.com'
        })
    }
})

userData
.then(data=>console.log(data))
.catch(error=>console.log(error))


// example three
// a simple ride hailing example
// creating a promise
const ride = new Promise((resolve, reject) => {  // callback function that resolves or rejects the promise
    arrived = false;
    if (arrived) {
        resolve('Driver arrived');
    } else {
        reject('Driver cancelled');
    }
});

ride
    .then(value => {
        console.log(value);
        // Driver arrived
    })
    .catch(error => {
        console.log(error);
        // Driver cancelled
    })
