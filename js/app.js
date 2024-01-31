// Adicionar nomes
let adicionarAmigos = document.getElementById('nome-amigo');
let amigosIncluidos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');
let listaAmigos = [];
let quantidadeAmigos = listaAmigos.length;
let indexDoador = 0
let indexRecebedor = 0
let listaDoador = [];
let listaRecebedor = [];

function adicionar() {
    if (adicionarAmigos.value == '') {
        alert('Entrada inválida, por favor adicionar um nome no campo "Nome do amigo"');
    } else if (listaAmigos.includes(adicionarAmigos.value)) {
        alert('Este nome já consta na lista, adicionar um nome diferente');
    } else {
        listaAmigos.push(adicionarAmigos.value);
        adicionarAmigos.value = '';
        amigosIncluidos.innerText = listaAmigos;
    }

}
// sortear nomes
function sortear() {
    let quantidadeAmigos = listaAmigos.length;
    if (quantidadeAmigos <= 3) {
        alert('Adicionar pelo menos 4 amigos para poder brincar');
    } else {
        while (listaAmigos.length !== listaDoador.length) {
            sorteioDoador();
            sorteioRecebedor();
            if (indexDoador == indexRecebedor || listaAmigos.length == listaDoador.length) {
                console.log(`reiniciou a contagem indexDoador1 ${indexDoador}`);
                console.log(`indexRecebedor1 ${indexRecebedor}`);
                reiniciar2();
                sortear();
            } else if (indexDoador == indexRecebedor) {
                console.log(`indexDoador1 ${indexDoador}`);
                console.log(`indexRecebedor1 ${indexRecebedor}`);
                sorteioDoador();
                sorteioRecebedor();
            }else if (listaDoador.includes(indexDoador)) {
                console.log(`indexDoador2 ${indexDoador}`);
                console.log(`indexRecebedor2 ${indexRecebedor}`);
                sorteioDoador();
            } else if (listaRecebedor.includes(indexRecebedor)) {
                console.log(`indexDoador3 ${indexDoador}`);
                console.log(`indexRecebedor3 ${indexRecebedor}`);
                sorteioRecebedor();
            } else {
                amigoDoador = listaAmigos[indexDoador];
                amigoRecebedor = listaAmigos[indexRecebedor];
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigoDoador + ' --> ' + amigoRecebedor + '<br>';       
                listaDoador.push(indexDoador);
                listaRecebedor.push(indexRecebedor);
                console.log(amigoDoador);
                console.log(amigoRecebedor);
                console.log(listaSorteio.innerHTML);
            }
        }
    }
}

function sorteioDoador() {
    let quantidadeAmigos = listaAmigos.length;
    indexDoador = parseInt(Math.random() * quantidadeAmigos);
    if (listaDoador.includes(indexDoador)) {
        return sorteioDoador();
    }
}

function sorteioRecebedor() {
    let quantidadeAmigos = listaAmigos.length;
    indexRecebedor = parseInt(Math.random() * quantidadeAmigos);;
    if (listaRecebedor.includes(indexRecebedor)) {
        return sorteioRecebedor();
    }
}
// Zerar todas as informações
function reiniciar() {
    listaAmigos = [];
    listaDoador = [];
    listaRecebedor = [];
    listaSorteio.innerText = '';
    amigosIncluidos.innerText = '';
    console.log(`listaAmigos ${listaAmigos}, listaDoador ${listaDoador}, listaRecebedor ${listaRecebedor}, listaSorteio ${listaSorteio.innerText}`);
}

function reiniciar2() {
    listaDoador = [];
    listaRecebedor = [];
    listaSorteio.innerText = '';
    console.log(`listaAmigos ${listaAmigos}, listaDoador ${listaDoador}, listaRecebedor ${listaRecebedor}, listaSorteio ${listaSorteio.innerText}`);
}