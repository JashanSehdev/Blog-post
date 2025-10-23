const params = new URLSearchParams(window.location.search);
const postId = Number(params.get("id"));
const dataSet = JSON.parse(localStorage.getItem("data") || []);
const post = dataSet.find((p) => { return p.id === postId});
const container = document.getElementById("container");

if (post) {
  container.innerHTML = `
    <h1>${post.title}</h1>
    <h3>${post.sub_title}</h3>
    <p>${post.description}</p>
    `;
} else {
    container.innerHTML = `Post not found`
}
