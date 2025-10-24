const params = new URLSearchParams(window.location.search);
const postId = Number(params.get("id"));
const dataSet = JSON.parse(localStorage.getItem("data") || []);
const post = dataSet.find((p) => {
  return p.id === postId;
});
const container = document.getElementById("edit-post");
const index = dataSet.findIndex((e) => e.id === postId);
console.log(postId, index);

let title = document.querySelector("#title");
let sub_title = document.querySelector("#small-area");
let description = document.querySelector("#big-area");

if (post) {
  title.value = post.title;
  sub_title.value = post.sub_title;
  description.value = post.description;
} else {
  container.innerHTML = `
    <h1> Unknown Error </h1>`;
}

function autoResize(element) {
  element.style.height = "auto";
  element.style.height = element.scrollHeight + "px";
}

container.addEventListener("submit", (e) => {
    e.preventDefault();
  if (index !== -1) {
    dataSet[index] = {
      ...dataSet[index],
      title: title.value,
      sub_title: sub_title.value,
      description: description.value,
    };

    localStorage.setItem("data",JSON.stringify(dataSet))
    window.alert ("your post has been updates")
    window.location.href = "../index.html";
  } else {
    window.alert("An ERROR occured, we can't update. please try again")
  }
});

document.querySelector("#cancel").addEventListener("click", () => {
  window.location.href = "../index.html";
});

//delete element

document.querySelector("#delete").addEventListener("click",()=>{
    if (index !== -1) {
        dataSet.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(dataSet))
        window.alert("Your POST has been deleted")
        window.location.href = "../index.html"
    }
    else {
        window.alert("An error occured, please try again")
    }
})
