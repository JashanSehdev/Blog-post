    let database =  [];
    let data = {
        image:"./assets/image.png",
        title:"Beautiful landScapes",
        desc: "lorem anything you want to describe can be put here"

    }

    database.push(data);
    database.push(data);
    database.push(data);

    let container = document.getElementsByClassName("blog-collection");


    container[0].innerHTML= database.map((e) =>
        `
        <div class="blog-post">
            <img src="${e.image}" alt="" />
            <div>
                <h1>${e.title}</h1>
                <p>${e.desc}</p>
            </div>
            </div>
        `
    ).join("")