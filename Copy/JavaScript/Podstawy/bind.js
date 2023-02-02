function test() {
	console.log(this)
	console.log(this.name)
}

const car = {
	name: "Audi",
}
const car1 = {
	name: "VW",
}
const car2 = {
	name: "KIA",
}

test.bind(car2)()
