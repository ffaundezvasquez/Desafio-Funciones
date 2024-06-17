function pintar(ele, color) {
    ele.style.backgroundColor = color;
}

document.getElementById("square1").addEventListener("click", function() {
    pintar(this, 'black');
});
document.getElementById("square2").addEventListener("click", function() {
    pintar(this, 'black');
});
document.getElementById("square3").addEventListener("click", function() {
    pintar(this, 'black');
});
document.getElementById("square4").addEventListener("click", function() {
    pintar(this, 'black');
});
