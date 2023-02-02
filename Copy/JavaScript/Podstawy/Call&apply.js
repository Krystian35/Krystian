const movie = {
    title: "Avangers"
}

function swhoMovie (price, cinema) {
    console.log(`Film: ${this.title}, cena: ${price}, kino: ${cinema}`);
}
// funkcja.call(obiekt, argumenty)
swhoMovie.call(movie, 35, 'CinemaCity')

// funkcja.aply(obiekt, tablica)

swhoMovie.apply(movie,[40, 'Nieznane'])