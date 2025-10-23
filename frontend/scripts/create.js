
let dataSet = JSON.parse(localStorage.getItem("data") || "[]")
console.log(dataSet);
 
document.querySelector("#send-post").addEventListener("submit",(e)=>{
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let sub_title = document.querySelector("#small-area").value
    let description = document.querySelector("#big-area").value

    let data = {
        id : Date.now(),
        title : title,
        sub_title : sub_title,
        description : description
    }
    dataSet.push(data);
    localStorage.setItem("data" ,JSON.stringify(dataSet));

    window.location.href = "index.html" // to redirect to Home
})

document.querySelector('#cancel').addEventListener("click",()=>{
    window.location.href = "./index.html"
})

function autoResize(element) {
  element.style.height = "auto";
  element.style.height = element.scrollHeight + "px";
}