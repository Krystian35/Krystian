const sizeUp = document.querySelector(".sizeUp")
const sizeDown = document.querySelector(".sizeDown")
const colorBtn = document.querySelector(".color")
const p = document.querySelector("p")
let fontSize = 36

const bigger = () => {
	fontSize += 5
	p.style.fontSize = fontSize + "px"
}

const decrease = () => {
	if (fontSize <= 21) return
	
	fontSize -= 5
	p.style.fontSize = fontSize + "px"
}

const colorChange = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const h = Math.floor(Math.random() * 255) 
    p.style.color = `rgb(${r}, ${g}, ${h})`
}

sizeUp.addEventListener("click", bigger)
sizeDown.addEventListener("click", decrease)
colorBtn.addEventListener('click', colorChange)