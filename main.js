const button = document.querySelector("#dice");
const title = document.getElementById("title");
const quote = document.getElementById("advice");

const url = "https://api.adviceslip.com/advice";

function fetchApi(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        title.innerHTML = `Advice # ${data.slip.id}`;
        quote.innerHTML = `"${data.slip.advice}"`;
    })
}

button.addEventListener("click", () => {
    fetchApi(url);
})


window.onload = () => {
    fetchApi(url)
}