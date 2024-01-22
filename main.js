
function handleColorChange(event, color){
    var unitpixel = document.getElementById(color)
    unitpixel.style.filter = `brightness(${event.target.value}%)`

    var pixel = document.getElementById('pixel')
    var R = document.getElementById('R').value * 2.55
    var G = document.getElementById('G').value * 2.55
    var B = document.getElementById('B').value * 2.55
    pixel.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
}

