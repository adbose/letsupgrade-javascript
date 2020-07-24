console.log("Fetch");

// making a get request
// const result  = fetch('https://jsonplaceholder.typicode.com/posts/1');

// result
// .then(response=>response.json())
// .then(data=>console.log(data))


// // post request
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method:'POST',
//     body: JSON.stringify({
//         userId:254,
//         title:"Some Title",
//         body:'lorem ipsum'
//     })
// })
// .then(response=>response.json())
// .then(data=>console.log(data))


// jokes api
// function fetchJokes(){
//     const response = fetch('https://api.chucknorris.io/jokes/random');
//     // this response is a promise 
//     console.log("Printed before response")
//     console.log(response);  // prints the pending promise
//     response.then(res=>res.json()).then(data=>console.log(data));
// }

// fetchJokes();

// another way using async await
async function fetchJokes(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    console.log(data);
}
fetchJokes();