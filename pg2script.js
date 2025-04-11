const jenbasstext = document.getElementById("bestcatch1")
const sharktext = document.getElementById("bestcatch2")
const carptext = document.getElementById("bestcatch3")

//Jennings Bass
jenbasstext.addEventListener("mouseover",() => {
    Jenningsbass.innerHTML = "This is my biggest flordia strain largemouth bass, coming in at 4.8 pounds. I caught it on live shiners under the T-Dock"
})

jenbasstext.addEventListener("mouseout",() => {
    Jenningsbass.innerHTML = ""
})
//Shark
sharktext.addEventListener("mouseover",() => {
    Piershark.innerHTML = "One of my biggest and most unexpected catches, this shark was caught on a small piece of squid ment for croaker."
})

sharktext.addEventListener("mouseout",() => {
    Piershark.innerHTML = ""
})
//Carp
carptext.addEventListener("mouseover",() => {
    Ricecarp.innerHTML = "This is my biggest freshwater fish by far, at approximatly 20 lbs. Caught on corn hookbait and chum"
})

carptext.addEventListener("mouseout",() => {
    Ricecarp.innerHTML = ""
})
