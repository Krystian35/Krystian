class Admin {
	constructor(name) {
		this.name = name
	}
	sound() {
		console.log(`Zwierzak robi hau hau`)
	}
}

class Dog extends Admin {
	constructor(name, age) {
		super(name)
		this.age = age
	}
}

class cat extends Admin {
	
	sound() {
		console.log("miau")
	}
}

const dog = new Dog("Misiek", 14)
const cat1 = new cat("kotek")
console.log(dog)
cat1.sound()
dog.sound()
