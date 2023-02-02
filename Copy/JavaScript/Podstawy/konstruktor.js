// KOnstruktor - funkcja do tworzenia obiektu

//Konstruktor
function User(name, age) {
	this.name = name
	this.age = age

	// this.hello = function (){
	//     console.log(`CZeść ${this.name}`);
	// }
}

//Obiekt

const newUser = new User("Franek", 23)
const newUser2 = new User("Wojtek", 35)
const newUser3 = new User("Lily", 3)

console.log(newUser, newUser2, newUser3)

// Prototyp
User.prototype.hello = function () {
	console.log(`CZeść ${this.name} :`)
}

User.prototype.country = "Polska"
