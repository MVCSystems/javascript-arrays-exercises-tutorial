function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	// Usando un bucle (loop) for, completa el código de la función sumTheElements para que devuelva la suma de todos los elementos en un array dado.
	// Si el argumento es [2, 13, 34, 5], la función debería devolver 54.

	for (let i = 0; i < theArray.length; i++) {
		total += theArray[i];
	}
	return total;
}
console.log(sumTheElements([2, 13, 34, 5]));
