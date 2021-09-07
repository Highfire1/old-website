let canvas = document.getElementById("canvas")

canvas.width = window.outerWidth
canvas.height = window.outerHeight

let ctx = canvas.getContext("2d")
ctx.fillStyle = '#303030';
ctx.fillRect(0, 0, 15000, 8000);
