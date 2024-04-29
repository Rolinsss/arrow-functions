/*
Questão 05: Escreva uma arrow function chamada maiorNumero que recebe dois 
números como parâmetros e retorna o maior deles. 
*/
const maiorNumero = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
};

console.log(maiorNumero(10, 5));