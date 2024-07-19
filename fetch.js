// Fetch API
// Make HTTP request from the browser to the server

// HTTP request methods
// Get - fetch data from the server
// post - send data to the server
// put - update data on the server
// delete - delete data from the server

// Facebook
// get all post - get
// Upload a photo - post
// Comment on a photo - post
// Edit Comment - put
// Delete comment - delete

// fetch(URL, options) - returns promise
// arguments - URL, options

// Syntax - 
// fetch(URL, options)

// API - JSON {key: value}

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        console.log(response);
        return response.json();
    }).then((data)=>{
        data.map((value)=>{
            console.log(value.title);
        })
    })



    // const aaray = [1,2,3,4,5,6,7,8,9,10];
    // aaray.map((value)=>{
    //     console.log(value)
    // })
    


