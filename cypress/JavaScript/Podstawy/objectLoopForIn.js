const user = {
	name: "Franek",
	age: 23,
	sex: "female",
	"hair-color": "blond",
}

for (const data in user) {
	console.log(data + ": " + user[data])
}
