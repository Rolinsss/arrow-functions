/*
Questão 07: Escreva uma arrow function chamada contaLetras que recebe uma 
string como parâmetro e retorna um objeto contendo a contagem de cada letra 
presente na string. 
*/
const contaLetras = (string) => {
    const contador = {};
    
    for (let letra of string) {
        if (letra !== ' ') {
            contador[letra] = (contador[letra] || 0) + 1;
        }
    }
    
    return contador;
};

console.log(contaLetras("banana"));