const dataSet = JSON.parse(localStorage.getItem("data") || '[]');

const search_bar = document.getElementById("search-bar");

const blog_collection = document.querySelector(".blog-collection");

function render(blogs) {
  blog_collection.innerHTML = "";

  if (blogs.length === 0) {
    blog_collection.innerHTML = `<p> No POST found </p>`;
    return;
  }

  blogs.forEach((e, index) => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");
    blogDiv.innerHTML = `
            <div>
                <h1>${e.title}</h1>
                <p>${e.sub_title}</p>
                <a href="read.html?id=${e.id}">Read</a>
                <a href="edit-post.html?id=${e.id}" id="edit" >Edit</a>
            </div>`;
    blog_collection.appendChild(blogDiv);
  });
}

search_bar.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  const filteredBlogs = dataSet.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.sub_title.toLowerCase().includes(query)
  );

  render(filteredBlogs);
});
