const user = {
    name: 'Lily',
    age: 23
}

const pet = {
    name: 'puszek',
    type: 'dog'

}


//Metoda assigne nadpisuje obiekty po lewej stronie: w przykłądzie poniżej name = Lily zostało nadpisane przez "puszek"
const userInfo = Object.assign({},user, pet)

console.log(userInfo);

// Object.assigne przydaje się w kopiowaniu obiektów

const userCopy = Object.assign({}, user)
userCopy.age = 25
console.log(userCopy);