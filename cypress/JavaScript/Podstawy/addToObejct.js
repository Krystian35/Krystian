const user = {
    name: 'Klaudia',
    age: 29

}
user.country = 'Polska'
user['fav-color'] = 'niebieski'

console.log(user);

const dogName = 'Reksio'
const dogAge = 4

const dog = {
    //przypisywanie zmiennej jako wartość
    //klucz: wartość
    name: dogName,
    age: dogAge
}

console.log(dog);

const comapny = {
	name: "S4D",
	address: {
		number: 1,
		"fav-estate": "Paderewa",
	},
}

comapny.address.stret = "Sowin"
comapny.address.city = "Katowice"
comapny["fav-boss"] = "Heniek"

console.log(comapny)

const name = "Urszula"
const surname = "Nowak"

const listMembers = {
	firstName: name,
	secoundSurname: surname,
	//można pominąć w takim przypadku klucz(kluczem będzie nazwa zmiennej)
	name,
	surname,
}

console.log(listMembers)
