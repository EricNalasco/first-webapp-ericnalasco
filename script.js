// Add JavaScript code for your web site here and call it from index.html.
const fishimgs = ["images/bass1.jpg","images/carp1.jpg","images/trout1.jpg"]
var i = 0
const imglink = document.getElementById("imgswap")
document.getElementById("myBtn")?.addEventListener("click",() => {
    imglink.src = fishimgs[i]
    i = i + 1
    if(i > 2){
        i = 0
    }
});
