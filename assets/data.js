fetch("https://jsonplaceholder.typicode.com/posts/")
.then(response => {
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
.then(data => {
    console.log(data)
    let apiData = data
    let apiDataLength = data.length
    let box = document.querySelector(#outerbox)
    for(let i=0; i<apiDataLength;i++){
        let posts = document.createElement("div")
        posts.className = "posts"
        let headId = document.createElement('h1')
        let headTitle = document.createElement('h1')
        let headBody = document.createElement('h1')
        let spanId = document.createElement('span')
        spanId.innerHTML = apiData[i].id
        let spanTitle = document.createElement('span')
        spanTitle.innerHTML = apiData[i].title
        let spanBody = document.createElement('span')
        spanBody.innerHTML = apiData[i].body
        headId.innerHTML = "ID :"
        headappendChild(spanId)
        headTitle.innerHTML = "Title :"
        headappendChild(spanTitle)
        headBody.innerHTML = "Body :"
        headappendChild(spanBody)
        box.appendChild(posts)

    }
})