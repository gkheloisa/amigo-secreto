function numberValidation(number) {
    if (number < 0) {
        console.log(`The number ${number} is negative`);
    } else if (number == 0) {
        console.log(`The number ${number} is zero`);
    } else {
        console.log(`The number ${number} is positive`);
    }
}

numberValidation(5);
numberValidation(-3);
numberValidation(0);

function legalAge(age) {
    year = age > 1 ? 'years' : 'year'
    if (age >= 18) {
        console.log(`This person is ${age} ${year} old, so they are of legal age`)
    } else {
        console.log(`This person is ${age} ${year} old, so they are not of legal age`)
    }
}

legalAge(10);
legalAge(24);
legalAge(1);
legalAge(18);

function isStringEmpty(string) {
    return string === '' ? 'String is empty' : 'String is not empty';
}

console.log(isStringEmpty(''));
console.log(isStringEmpty('Not empty'));

function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}

console.log(verificarAnoBissexto(2025));
console.log(verificarAnoBissexto(2024));

function average(num1, num2) {
    if (isNaN(num1, num2)) {
        return 'Invalid number';
    } else {
        return (num1 + num2) / 2;
    }
    
}

console.log(average(56, 43));
console.log(average('d', 43));

function arraySize(array){
    return array.length;
}

console.log(arraySize([1,2,6,4,8]));
console.log(arraySize([]));

function isItThere(array, element) {
    return array.includes(element) ? `${element} is included in the array` : `${element} is not included in the array`;
}

const myList = ['banana', 56, 'see'];
element1 = 'dolphin';
element2 = 'banana';

console.log(isItThere(myList, element1));
console.log(isItThere(myList, element2));

function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return {
        somaPares,
        produtoImpares
    };
}

const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSomaProduto(numeros);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);
