
let colorButton = document.querySelector('#color-button')

colorButton.onclick = changeColor

function changeColor() {
    let red = document.querySelector('#red').value
    let green = document.querySelector('#green').value
    let blue = document.querySelector('#blue').value
    let colorStr = `rgb(${red}, ${green}, ${blue})`
    console.log(colorStr)
    document.querySelector('#colorful-text').innerHTML = colorStr
    document.querySelector('#wrapper').style.background = colorStr
}
