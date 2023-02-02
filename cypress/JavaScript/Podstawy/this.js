// Stwóz obiekt 'user' z imieniem oraz metodą, która wypisze imie w konsoli

const user3 = {
	name: "Andrzej",
	nazwisko: "Nowak",
	wyświetl() {
		//this zastępuje nam obiekt, jeżeli zmieniemy nazwę obiektu nadal będzie działał
		console.log(this.name)
	},
}
user3.wyświetl()

// this w zaposie globalnym targetuje WINDOW
console.log(this)

// this w zwykłej funkcji wskazuje na obiekt, który jest na lewo od kropki

const person = {
	name: "Ala",
	"fav-meal": "schabowy",
	address: {
		city: "Kraków",
		"zip - code": "30-402",
		showCity: function () {
			console.log(this.city)
		},
	},
	showinfo() {
		console.log(this.name)
		console.log(this["fav-meal"])
	},
}

person.address.showCity()

person.showinfo()

// this w konstruktorze wskazuje na obiekt, stworzony na podstawie konstruktora

function Food(name) {
	this.name = name
}

const newF = new Food("kasza manna")

console.log(newF)

console.log("---------------")

// this w listenerach, działa poprawnie, jeżeli używamy zwykłej funkcji. Wskazuje na Window podczas użycia funcji strzałkowej

const btns = document.querySelectorAll("button")

btns.forEach(btn =>
	btn.addEventListener("click", function () {
		console.log(this.textContent)
	})
)

//this w funkcji strzałkowej

const ob = {
	number: 1234564,
	showNumber() {
		console.log(this.number)
	},
	showNumber2() {
		const test = () => {
			console.log(this.number)
			console.log(this)
		}
		test()
	},
}
ob.showNumber()
ob.showNumber2()
