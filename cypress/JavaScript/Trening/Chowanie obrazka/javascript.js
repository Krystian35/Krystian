const btn = document.querySelector(".arrow")
const arrowBtn = document.querySelector(".fas.fa-arrow-down")
const img = document.querySelector(".item1")

const showImg = () => {
	img.classList.toggle("hide")
	if (img.classList.contains("hide")) {
		arrowBtn.style.transform = "rotate(180deg)"
	} else {
		arrowBtn.style.transform = "rotate(0)"
	}
}

btn.addEventListener("click", showImg)
