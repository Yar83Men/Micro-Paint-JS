let canvas = document.getElementById('canv');
let ctx = canvas.getContext("2d");
let arrow = document.querySelector(".img-arrow");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let divChoise = document.querySelector(".choise");
let color = document.querySelector("input[type='color']");
let size = document.querySelector("input[type='range']");

let painting = false;
let colorChoise;
let sizeChoise;

arrow.addEventListener("mouseenter", function() {
    divChoise.style.display = "block";

});

/*divChoise.addEventListener("mouseleave", function() {
    divChoise.style.display = "none";
});*/

color.addEventListener("change", function() {
    return colorChoise = this.value;
});

size.addEventListener("change", function() {
    return sizeChoise = this.value;
});

function startPosition() {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = sizeChoise;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorChoise;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);