let arr = [4,5,734,43,45];

//*****************
// Your code here
// 1: Agrega 10 números enteros aleatorios a la lista arr e imprime el array en la consola.

for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random()*100));
}
console.log(arr);

//*****************
