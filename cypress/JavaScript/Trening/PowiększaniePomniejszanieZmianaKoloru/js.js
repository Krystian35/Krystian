const sizeUp = document.querySelector(".sizeUp")
const sizeDown = document.querySelector(".sizeDown")
const colorBtn = document.querySelector(".color")
const p = document.querySelector("p")
let fontSize = 36

//zwiększanie

const increase = () => {
	if (fontSize >= 80) return
	fontSize += 5
	p.style.fontSize = fontSize + "px"
}

const decreas = () => {
	if (fontSize <= 30) return
	fontSize -= 5
	p.style.fontSize = fontSize + "px"
}

const color = () => {
	const r = Math.random() * 255
	const g = Math.random() * 255
	const b = Math.random() * 255
	p.style.color = `rgb(${r},${g},${b})`
	console.log(p)
}

sizeUp.addEventListener("click", increase)
sizeDown.addEventListener("click", decreas)
colorBtn.addEventListener("click", color)
