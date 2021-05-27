var canvas= document.getElementById ("canavos")
var ctx=canvas.getContext("2d")
var mouseevent=""
var lastx,lasty,currentx,currenty

canvas.addEventListener("mousedown" , md)
function md(e) {
    mouseevent="mousedown"
    console.log("mouse is clicked")
}

canvas.addEventListener("mouseleave" , ml)
function ml(e) {
    mouseevent="mouseleave"
    console.log("mouse has left the canvas")
}

canvas.addEventListener("mouseup" , mu)
function mu(e) {
    mouseevent="mouseup"
    console.log("mouse is up")
}

canvas.addEventListener("mouseenter" , me)
function me(e) {
    mouseevent="mouseenter"
    console.log("mouse has joined the canvas")
}

canvas.addEventListener("mousemove" , mm)
function mm(e) {
    currentx=e.clientX-canvas.offsetLeft
    currenty=e.clientY-canvas.offsetTop
    if (mouseevent=="mousedown") {
        ctx.beginPath()
        ctx.strokeStyle="red"
        ctx.linewidth=7
        ctx.arc(lastx , lasty , currentx , currenty,2,0,2*Math.PI)
        ctx.stroke()
    }
    lastx=currentx
    lasty=currenty
}