let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
// Crea un objeto donde las letras son las propiedades y los valores son el número de veces que esa letra se repite en toda la cadena.
for(let i in par) {
    const letter = par[i].toLowerCase();
    if(letter == " ") continue;
    else if(counts[letter] == undefined) {
        counts[letter] = 1;
    } 
    else {
        counts[letter] = counts[letter] + 1;
    }
}

console.log(counts);
