// const myOject = {
//     key: values,
//     key: values,
//     key: values
// }
const name = "Majka"
const age = 23
const newUser = {
	name: "Ola",
	age: "23",
	car: {
		brand: "opel",
		model: "corsa",
		color: "black",
		sound() {
			console.log("brum, brum")
		},
		test: 123,
	},
}

newUser.car.sound()
