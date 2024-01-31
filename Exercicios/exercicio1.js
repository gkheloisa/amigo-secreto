let minhaLista = [1,2,3];
let outraLista = [4,5,6];
let novaLista = minhaLista.concat(outraLista);
console.log(novaLista);

let elementos = novaLista.length;
novaLista.pop(elementos - 1);
console.log(novaLista);

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}

embaralha(novaLista);
console.log(novaLista);

function removerDuplicadas() {
    novaLista
}