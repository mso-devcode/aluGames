const aPalavraEhUmPalindromo = function (palavra) {
    let palavraSeperada = palavra.split("");
    let palavraInvertida = palavraSeperada.reverse();
    let palavraInvertidaJuntada = palavraInvertida.join("");

    if ( palavra == palavraInvertidaJuntada) {
        console.log("A palara é palíndromo");
    } else {
        console.log("A palara não é palíndromo");
    }
    
}

aPalavraEhUmPalindromo("arara");