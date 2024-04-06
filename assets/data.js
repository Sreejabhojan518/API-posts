fetch("https://jsonplaceholder.typicode.com/posts/")
.then(response => {
    if(!response.ok) {
        throw new Error("Network responde was not ok");
    }
    console.log(response.json())
    return response.json();
})
.then(data =>{
    console.log(data)
})