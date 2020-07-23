console.log("Async/Await");


// async await
// async will tell a function to work in the background
// await tells the function to wait till the async function is resolved


const photos = [];
async function photoUpload(){
    let status = new Promise((respolve, reject)=>{
        setTimeout(()=>{
            photos.push('Avatar');
            resolve('Profile Updated');
        }, 3000)
    })

    let result = await status;
    console.log(result);
}

photoUpload();