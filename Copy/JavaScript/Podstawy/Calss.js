// function Person(name, age) {
// 	this.name = name
// 	this.age = age
// }

// Person.prototype.sayHi = function () {
// 	console.log(`Cześć jestem ${this.name}`)
// }

// Person.prototype.showAge = function () {
// 	console.log(`Czesc mam ${this.age} lat`)
// }

// const person1 = new Person("Wjotek", 30)

// console.log(person1)
// person1.sayHi()
// person1.showAge()

// //=====================

class Person2 {
	constructor(name, age, surname) {
		this.name = name
		this.age = age
	}
	sayHi1() {
		console.log(`Cześć, jestem ${this.name}`)
	}
	showAge1() {
		console.log(`Mam ${this.age} lat`)
	}
}

const person2 = new Person2('Maciek', 67)
person2.sayHi1()
person2.showAge1()


const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn4 = document.querySelector(".btn4")

// function potrawa(type, ilość) {
// 	this.type = type
// 	this.ilość = ilość
// }
// potrawa.prototype.showMenu = function () {
// 	console.log(`Potrawa ${this.type} zawiera ${this.ilość} kalori`)
// }

// const food = new potrawa("pizza", 500)
// const food1 = new potrawa("hamburger", 120)
// const food2 = new potrawa("salat", 20)

// btn1.addEventListener("click", () => food1.showMenu())
// btn2.addEventListener("click", () => food.showMenu())
// btn4.addEventListener('click', ()=> food2.showMenu())

class menu2 {
	constructor(potrawa, jakość) {
		this.potrawa = potrawa
		this.jakość = jakość
	}
	showMenu2() {
		console.log(`Jestem ${this.potrawa} jaką mam jakość ${this.jakość}`)
	}
	showMenu3() {
		console.log(`Odwrócona kolejnoość ${this.jakość} tej ${this.ptrawa}`)
	}
}

const it1 = new menu2("Schabowy", "Dobra")
const it2 = new menu2("Udko z kurczaka", "Bardzodobra")

it1.showMenu2()
it1.showMenu3()

btn1.addEventListener("dblclick", () => it1.showMenu2())
