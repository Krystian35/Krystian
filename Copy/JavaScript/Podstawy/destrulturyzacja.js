

//DESTRUKTURYZACJA NA OBIEKCIE
const person = {
	name: "Lily",
	age: 23,
	job: "Furman",
	car: {
		brand: "Audi",
		model: "A5",
	},
}

const showInfo = () => {
	// Aby nie podawać wszędzie obiektu do którego chcemy się dostać można zapisać to inaczej
	console.log(
		`${person.name} pracuje jako ${person.job} i ma ${person.age} lat`
	)

	// const {name, age, job} = person // to jest inny zapis tego poniżej
	// const name = person.name
	// const age = person.age
	// const jon = person.job
	const { name, age, job } = person

	console.log(`${name} pracuje jako ${job} i ma ${age}`)
}

showInfo()

console.log(`===============================`)
// Inny sposób zapisu 
const showInfo2 = ({ name, age, job }) => {
	// const {name, age, job} = person mozęmy przekazać jako parametr funkcji

	console.log(`${name} pracuje jako ${job} i ma ${age} lat itp `)
}
showInfo2(person)

console.log(`=======================`)
// Inny sposób zapisu
const showInfo3 = ({ car: { brand, model } }) => {
	console.log(`Jej samochód to ${brand}, ${model}`)
}

showInfo3(person)

console.log(`==========================================`)
// jeszcze inaczej
const showInfo4 = () => {
	const {
		car: { brand, model },
	} = person

	console.log(`Jej samochód to ${brand}, ${model}`)
}
showInfo4()

//DESTRUKTURYZACJA NA TABLICY

const colors = ['red', 'green', 'blue']

const firstColor = colors[0]
const secondColor = colors [1]

const [firs, secound] = colors
console.log(secound);

const[,,abcd] = colors
console.log(abcd);