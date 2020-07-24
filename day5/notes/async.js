console.log("Async/Await");


// async await
// async will tell a function to work in the background
// await tells the function to wait till the async function is resolved



// var photos = [];
// function photoUpload(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             photos.push('Avatar');
//             resolve('Profile Updated');
//         }, 3000)
//     })
// }
// photoUpload().then(e => alert(e));


// another way
// var photos = [];
// function photoUpload(){
//     let status = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             photos.push('Avatar');
//             resolve('Profile Updated');
//         }, 3000)
//     })

//     let result = status;  // assigning the status promise to result
//     result  // resolving promise
//         .then(value=>{alert(value)})
// }

// photoUpload();


// // async/await
var photos = [];
async function photoUpload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            photos.push('Avatar');
            resolve('Profile Updated');
        }, 3000)
    })

    console.log("Printed without waiting")
    let result = await status;
    console.log(photos.length);
}
photoUpload();

// async puts the function photoUpload in the background for execution
// await tells the status promise to hold till the async functions gets executed
