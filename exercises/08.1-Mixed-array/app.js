let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
// Usando un bucle, imprime un nuevo array en la consola que contenga los tipos de valores (data-types) que contiene el array mix en cada posición.

let types = [];

for (let i = 0; i < mix.length; i++) {
    types.push(typeof mix[i]);
    }

console.log(types); // ["number", "boolean", "string", "object", "string", "number", "object"]
