const Data = localStorage.getItem("search_img")
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}
let url = `https://api.unsplash.com/search/photos/?&query=${Data}&client_id=u6wEwe8Z6O3D74c9TUArDxu4pPExu2fjKq1W6MuXonc&per_page=50`

async function makeAPICall() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        append(data.results)

    } catch (error) {

        console.log("error", error)
    }
}
makeAPICall()

function append(data) {
    let box = document.getElementById("box1")
    data.map(element => {
        let image = document.createElement("img")
        image.src = element.urls.small
        let tit = document.createElement("p")
        tit.innerHTML = element.user.name
        let div = document.createElement("div")
        div.setAttribute("class", "imgdiv")
        div.append(image, tit)
        box1.append(div)
    });

}
// INFINITE SCROLL

const showdata = () => {
    setTimeout(() => {

        makeAPICall()

    }, 100)


}

window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement
    if ((scrollTop + clientHeight) >= scrollHeight) {
        showdata()
    }
})
// search option

function myfunction() {

    window.location.href = "index.html"

}