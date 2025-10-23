    
    let database =  JSON.parse(localStorage.getItem("data") || "[]");
    
    console.log(database);
    
 

    let container = document.getElementsByClassName("blog-collection");



    container[0].innerHTML= database.map((e) =>
        `
        <div class="blog-post" data>
            <div>
                <h1>${e.title}</h1>
                <p>${e.sub_title}</p>
                <a href="read.html?id=${e.id}">Read</a>
                <a href="edit-post.html?id=${e.id}" id="edit" >Edit</a>
            </div>
            </div>
        `
    ).join("")

    document.getElementById("create-post").addEventListener("click", () => {
        window.location.href = "./create-post.html"
    })