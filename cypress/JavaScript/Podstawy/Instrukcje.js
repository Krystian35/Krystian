// IF, ELSE IF & ELSE

const pass = `asdfaafsd!fasdfa`

if (pass.length > 10 && pass.includes("!")) {
	console.log("Masz dobre hasło")
} else if (pass.length > 10) {
	console.log("Masz lepsze hasło")
} else {
	console.log("Masz złe hasło")
}

// const color = 'blue'

// if ( color == 'blue') {
//     if( 10>0) {
//         console.log('True');
//     }

// } else {
//     console.log('False');
// }

//SWITCH
// const day = "Niedziela"

// switch (day) {
// 	case "poniedziałek":
// 		console.log("Dziś jest POniedizałek")
// 		break

// 	case "Wtorek":
// 		console.log("Dziś jest Wtorek")
// 		break

// 	case "Środa":
// 		console.log("Dziś jest Środa")
// 		break

// 	case "Czwartek":
// 		console.log("Dziś jest Czwartek")
// 		break

// 	case "Piątek":
// 		console.log("Dziś jest Piątek")
// 		break

// 	default:
// 		console.log("jest weekend")
// }

// OPERATOR WARUNKOWY
// wartość ? TRUE :FALSE

const x = 21
// if(x>20) {
//     console.log(`${x} > 20 `);
// } else {
//     console.log(`${x} < 20`);
// }

const newX = (x > 20) ? `${x}>20 `:`${x}<20`
console.log(newX);

