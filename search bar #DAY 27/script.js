let search = document.getElementById("search")
let xMark = document.getElementById("x-mark")
let container = document.getElementById("container")
let input = document.getElementById("input")


search.onclick = function() {
    container.style.animation = "Containerwidth 0.3s ease forwards"
    input.style.animation = "Inputwidth 0.3s ease forwards"
    xMark.style.animation = "Opacity 0.3s ease forwards"
}

xMark.onclick = function() {
    container.style.animation = "ContainerwidthReverse 0.3s ease forwards"
    input.style.animation = "InputwidthReverse 0.3s ease forwards"
    xMark.style.animation = "OpacityReverse 0.3s ease forwards"
}